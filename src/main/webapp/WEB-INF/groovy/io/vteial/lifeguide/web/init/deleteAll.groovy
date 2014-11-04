import io.vteial.lifeguide.model.Item
import io.vteial.lifeguide.model.User

def entities = User.findAll()
entities.each { entity ->
	entity.delete()
}
println entities.size() + ' users deleted'

entities = Item.findAll()
entities.each { entity ->
	entity.delete()
}
println entities.size() + ' items deleted'

println 'Deleted all...'