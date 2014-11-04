package io.vteial.lifeguide.web.init

import groovy.json.JsonParserType
import groovy.json.JsonSlurper
import io.vteial.lifeguide.model.Item
import io.vteial.lifeguide.util.Helper

try {
	String domainPerfix = Helper.getDomainPrefix(request, app)
	String s = domainPerfix + '/init/parseItems'
	println s

	def response = (new URL(s)).get()
	//println response.text
	def jsonSlurper = new JsonSlurper(type: JsonParserType.INDEX_OVERLAY)
	def itemsJson = jsonSlurper.parseText(response.text)
	//println itemsJson

	Item itemE = null
	Date now = new Date()
	itemsJson.items.each { itemJson ->
		def entities = datastore.execute {
			from 'Item'
			where videoId == itemJson.videoId
		}
		//println entities
		if(entities.size() > 0) {
			itemE = entities[0] as Item
			itemE.updateTime = now
		} else {
			itemE = new Item()
			itemE.videoId = itemJson.videoId
			itemE.createTime = now
			itemE.updateTime = now
		}
		String itemName = itemJson.name
		int index = itemName.indexOf(' ')
		if(index > 0) {
			itemName = itemName.substring(index+1)
		}
		itemE.name = itemName
		datastore.withTransaction { itemE.save() }
		println itemE
		println '-------------------'
	}
	println 'Items created...'
}
catch(Throwable t) {
	t.printStackTrace(out)
}

