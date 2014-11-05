email	to : '/receiveEmail.groovy'

jabber	chat,	 		to : '/receiveJabberMessage.groovy'
jabber 	presence,		to : '/receiveJabberpresence.groovy'
jabber	subscription, 	to : '/receiveJabberSubscription.groovy'

get 	'/info',		forward  : '/info.groovy'
get 	'/favicon.ico',	redirect : '/assets/favicon.png'

all 	'/_ah/warmup',	forward : '/ping.groovy'

// cron
get '/cron/dailyBackup',	forward : '/cron/dailyBackup.groovy'
// data
get '/init/createAll',		forward : '/io/vteial/lifeguide/web/init/createAll.groovy'
get '/init/deleteAll',   	forward : '/io/vteial/lifeguide/web/init/deleteAll.groovy'
get '/init/createUsers', 	forward : '/io/vteial/lifeguide/web/init/createUsers.groovy'
get '/init/parseItems',  	forward : '/io/vteial/lifeguide/web/init/parseItems.groovy'
get '/init/createItems', 	forward : '/io/vteial/lifeguide/web/init/createItems.groovy'

// security
get  '/security/t',            forward : '/io/vteial/lifeguide/web/security/t.groovy'
post '/security/authenticate', forward : '/io/vteial/lifeguide/web/security/authenticate.groovy'

// item
get    '/items',          forward : '/io/vteial/lifeguide/web/item/itemList.groovy'
get    '/items/item/@id', forward : '/io/vteial/lifeguide/web/item/itemFindById.groovy?id=@id'
post   '/items/item',     forward : '/io/vteial/lifeguide/web/item/itemCreate.groovy'
put    '/items/item/@id', forward : '/io/vteial/lifeguide/web/item/itemUpdate.groovy?id=@id'
delete '/items/item/@id', forward : '/io/vteial/lifeguide/web/item/itemDelete.groovy?id=@id'

