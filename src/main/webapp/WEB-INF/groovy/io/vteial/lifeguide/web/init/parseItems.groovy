package io.vteial.lifeguide.web.init

import org.jsoup.Jsoup
import org.jsoup.nodes.Document
import org.jsoup.nodes.Element
import org.jsoup.select.Elements

def content = [:]
content.items = []
try {
	String s = 'http://anatomictherapy.org/defect-cured-video.php'
	if(params.parseUrl != null && params.parseUrl != '') {
		s = params.parseUrl
	}
	def response = (new URL(s)).get()
	Document document = Jsoup.parse(response.text)
	Element e0 = document.body()
	Elements es0 = e0.getElementsByAttributeValue('class', 'container')
	e0 = es0.first()
	es0 = e0.getElementsByTag('tbody')
	//e0 = es0.get(1)
	//println e0.html();
	for(int i = 1; i < es0.size(); i++){
		Element e1 = es0.get(i);
		//println e1.html()
		Elements es1 = e1.getElementsByTag('td')
		es1.each { e2 ->
			//println e2.html()
			Elements es2 = e2.getElementsByTag('a')
			Element e3 = es2.last();
			//println e3.html();
			def item = ['name' : e3.ownText(), 'videoUrl' : e3.attr('href')]
			def matcher = (item.videoUrl =~ /^http:\/\/www\.youtube\.com\/v\/(.*)&.*$/)
			item.videoId =  matcher[0][1]
			content.items << item
		}
	}
}
catch(Throwable t) {
	//t.printStackTrace(out)
	content.exceptionStackTrace = t.message
}

def json = new groovy.json.JsonBuilder(content)
println json
