get '/favicon.ico', redirect : '/assets/favicon.png'

all '/_ah/warmup', forward : '/ping.groovy'

// init
get '/init/initUser',  forward : '/io/vteial/lifeguide/web/init/initUser.groovy'
get '/init/parseItem', forward : '/io/vteial/lifeguide/web/init/parseItem.groovy'
get '/init/initItem',  forward : '/io/vteial/lifeguide/web/init/initItem.groovy'

// security
get  '/security/t',            forward : '/io/vteial/lifeguide/web/security/t.groovy'
post '/security/authenticate', forward : '/io/vteial/lifeguide/web/security/authenticate.groovy'

// item
get    '/items',          forward : '/io/vteial/lifeguide/web/item/itemList.groovy'
get    '/items/item/@id', forward : '/io/vteial/lifeguide/web/item/itemFindById.groovy?id=@id'
post   '/items/item',     forward : '/io/vteial/lifeguide/web/item/itemCreate.groovy'
put    '/items/item/@id', forward : '/io/vteial/lifeguide/web/item/itemUpdate.groovy?id=@id'
delete '/items/item/@id', forward : '/io/vteial/lifeguide/web/item/itemDelete.groovy?id=@id'

