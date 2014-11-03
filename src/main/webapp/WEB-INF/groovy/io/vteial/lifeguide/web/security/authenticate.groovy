package io.vteial.lifeguide.web.security
import io.vteial.lifeguide.model.User

import com.fasterxml.jackson.databind.ObjectMapper

ObjectMapper mapper = new ObjectMapper();

User userA = mapper.readValue(request.reader.text, User.class);
User userE = User.get(userA.userId)
if(!userE) {
	println 'Invalid User Id or Password...'
}
if(!userE.password.equals(userA.password)) {
	println 'Invalid User Id or Password...'
}

println userE.userId;
