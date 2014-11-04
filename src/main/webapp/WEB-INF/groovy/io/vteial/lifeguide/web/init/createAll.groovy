import io.vteial.lifeguide.util.Helper

try {
	String serverPrefix = Helper.getDomainPrefix(request, app)

	String s = serverPrefix + '/init/createUsers'
	println s
	def response = (new URL(s)).get()
	println response.text
	println 'Users created...'

	s = serverPrefix + '/init/createItems'
	println s
	response = (new URL(s)).get()
	println response.text
	println 'Items created...'

	println 'Created all...'
}
catch(Throwable t) {
	t.printStackTrace(out)
}