
println "App Info    : ${app}"
println "Request URI : ${request.requestURI}"
println "Request URL : ${request.requestURL}"
headers.each { header -> println "${header.key} = ${header.value}" }
