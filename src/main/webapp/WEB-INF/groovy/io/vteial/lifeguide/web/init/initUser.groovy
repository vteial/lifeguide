package io.vteial.lifeguide.web.init

import io.vteial.lifeguide.model.User

User user = User.get('vteial')
Date now = new Date()
datastore.withTransaction {
	if(!user) {
		user = new User()
		user.userId = 'vteial'
	}
	user.password = '1234'
	user.emailId = 'vteial@gmail.com'
	user.status = 'active'
	user.firstName = 'Eialarasu'
	user.lastName = 'VT'
	user.createTime = now
	user.updateTime = now
	user.save()
}

//println User.findAll {  where firstName == 'Eialarasu' }
def entities = datastore.execute {
	from 'User'
	where firstName == 'Eialarasu'
	limit 1
}
println entities

println 'Successfully initialized...'