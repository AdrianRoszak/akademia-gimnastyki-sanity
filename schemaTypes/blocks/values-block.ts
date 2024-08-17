import { defineField, defineType } from 'sanity'

export const valuesBlock = defineType({
  name: 'values_block',
  title: 'Wartości',
  type: 'object',
  fields: [
    defineField({
      name: 'values_block_title',
      title: 'Tytuł',
      type: 'string',
      initialValue: 'Nasze wartości'
    }),
    defineField({
      name: 'values_block_description',
      title: 'Opis',
      type: 'text',
      rows: 2
    }),
    defineField({
      name: 'values_block_values_selector',
      title: 'Wartości',
      type: 'values_selector'
    })
  ]
})
