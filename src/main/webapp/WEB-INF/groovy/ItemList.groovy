import io.vteial.lifeguide.model.Item

import com.fasterxml.jackson.databind.ObjectMapper

ObjectMapper mapper = new ObjectMapper()

List<Item> items = Item.findAll()

response.contentType = 'application/json'
mapper.writeValue(out, items)

