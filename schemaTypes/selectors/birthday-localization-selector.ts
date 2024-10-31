import { defineField, defineType } from 'sanity'

export const birthdayLocationSelector = defineType({
  name: 'birthday_location_selector',
  title: 'Lokalizacje',
  type: 'document',
  fields: [
    defineField({
      name: 'birthday_location_selector_list',
      title: 'Lokalizacje',
      type: 'array',
      of: [
        {
          type: 'reference',
          title: 'Wybierz lokalizację z listy',
          to: [{ type: 'birthday_location_item' }]
        }
      ]
    })
  ]
})
