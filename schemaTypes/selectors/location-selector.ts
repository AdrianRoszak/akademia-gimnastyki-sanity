import { defineType } from 'sanity'

export const locationSelector = defineType({
  name: 'location_selector',
  title: 'Wybór lokalizacji',
  type: 'object',
  fields: [
    {
      name: 'location_selector_list',
      title: 'Wybierz lokalizację',
      type: 'array',
      of: [
        {
          type: 'reference',
          title: 'Wybierz lokalizację z listy',
          to: [{ type: 'location_item' }],
          options: {
            filter: '_type == "location_item" && !(_id in path("drafts.**"))'
          }
        }
      ]
    }
  ]
})
