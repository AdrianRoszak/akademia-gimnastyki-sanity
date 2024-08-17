import { defineField, defineType } from 'sanity'

export const valueItem = defineType({
  name: 'value_item',
  title: 'Wartość',
  type: 'document',
  fields: [
    defineField({
      name: 'value_item_title',
      title: 'Tytuł wartości',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'value_item_description',
      title: 'Opis wartości',
      type: 'text',
      validation: (Rule) => Rule.required()
    })
  ]
})
