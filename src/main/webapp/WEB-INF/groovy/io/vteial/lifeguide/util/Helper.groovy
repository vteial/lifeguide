package io.vteial.lifeguide.util

import javax.servlet.http.HttpServletRequest

public class Helper {

	public static String getDomainPrefix(def request, def app) {
		String s = 'http://'

		if(app.env.name == 'Production') {
			s += app.id + '.appspot.com'
		}
		else {
			s += request.localAddr + ':' + request.localPort
		}

		return s
	}
}
