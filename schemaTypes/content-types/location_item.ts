import { defineField, defineType } from 'sanity'

export const locationItem = defineType({
  name: 'location_item',
  title: 'Lokalizacja',
  type: 'document',
  fields: [
    defineField({
      name: 'location_item_name',
      title: 'Nazwa lokalizacji',
      type: 'string',
      description: 'Dodaj nazwę lokalizacji',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'location_item_address',
      title: 'Adres',
      type: 'text',
      description: 'Dodaj adres lokalizacji',
      validation: (Rule) => Rule.required(),
      rows: 2
    })
  ]
})
