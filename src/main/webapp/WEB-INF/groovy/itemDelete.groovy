import io.vteial.lifeguide.model.Item

long id = Long.parseLong(params.id).longValue();

Item item = Item.get(id)
System.out.println(item)
item.delete()

println id
