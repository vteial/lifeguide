import io.vteial.lifeguide.model.Item

import com.fasterxml.jackson.databind.ObjectMapper

ObjectMapper mapper = new ObjectMapper();

Item item = mapper.readValue(request.reader.text, Item.class);

datastore.withTransaction { item.save() }
System.out.println(item)

response.contentType = 'application/json'
mapper.writeValue(out, item);
