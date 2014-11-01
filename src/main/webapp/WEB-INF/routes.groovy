get '/favicon.ico', redirect : '/assets/favicon.png'

all '/_ah/warmup', forward : '/ping.groovy'

//Item
get '/items', forward : '/itemList.groovy'
post '/items/item', forward : '/itemAdd.groovy'
put '/items/item/1', forward : '/itemUpdate.groovy'
delete '/items/item/1', forward : '/itemDelete.groovy'