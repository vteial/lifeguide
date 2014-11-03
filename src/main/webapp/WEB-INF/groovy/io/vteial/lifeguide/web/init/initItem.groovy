package io.vteial.lifeguide.web.init

import groovy.json.JsonParserType
import groovy.json.JsonSlurper
import io.vteial.lifeguide.model.Item

try {
	String s = 'http://'
	if(app.env.name == 'Production') {
		s += app.id + '.appspot.com'
	}
	else {
		s += request.localAddr + ':' + request.localPort
	}
	s += '/init/parseItem'
	println s

	URL url = new URL(s)
	def response = url.get()
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
		println entities
		if(entities.size() > 0) {
			itemE = entities[0] as Item
			itemE.updateTime = now
		} else {
			itemE = new Item()
			itemE.videoId = itemJson.videoId
			itemE.createTime = now
			itemE.updateTime = now
		}
		itemE.name = itemJson.name
		datastore.withTransaction { itemE.save() }
		println itemE
		println '-------------------'
	}
}
catch(Throwable t) {
	t.printStackTrace(out)
}

println 'done...'