get '/favicon.ico', redirect : '/assets/favicon.png'

all '/_ah/warmup', forward : '/ping.groovy'

//Item
get '/items', forward : '/itemList.groovy'
get '/items/item/@id', forward : '/itemFindById.groovy?id=@id'
post '/items/item', forward : '/itemCreate.groovy'
put '/items/item/@id', forward : '/itemUpdate.groovy?id=@id'
delete '/items/item/@id', forward : '/itemDelete.groovy?id=@id'