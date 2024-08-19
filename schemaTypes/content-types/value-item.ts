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
      description: 'Wprowadź tytuł wartości. Maksymalnie 50 znaków.',
      validation: (Rule) => Rule.required().max(50)
    }),
    defineField({
      name: 'value_item_icon',
      title: 'Ikona',
      type: 'inlineSvg',
      description: 'Wgraj ikonę SVG.'
    }),
    defineField({
      name: 'value_item_description',
      title: 'Opis wartości',
      type: 'text',
      validation: (Rule) => Rule.required()
    })
  ]
})
