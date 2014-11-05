package cron

try {
	StringBuilder sb = new StringBuilder()
	headers.each { header -> sb << "${header.key} = ${header.value} \n" }
	sb << request.reader.text
	log.info sb.toString()

	println 'dailyBackup...'
}
catch(Throwable t) {
	log.severe t.message
}

