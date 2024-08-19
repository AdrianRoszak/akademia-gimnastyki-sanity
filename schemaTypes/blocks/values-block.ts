import { defineField, defineType } from 'sanity'

export const valuesBlock = defineType({
  name: 'values_block',
  title: 'Wartości',
  type: 'object',
  fields: [
    defineField({
      name: 'values_block_title',
      title: 'Nagłówek',
      type: 'string',
      description: 'Wprowadź nagłówek sekcji. Maksymalnie 50 znaków.',
      validation: (Rule) => Rule.required().min(3).max(50)
    }),
    defineField({
      name: 'values_block_lead',
      title: 'Lead',
      type: 'text',
      description: 'Wprowadź krótki opis sekcji.',
      rows: 2
    }),
    defineField({
      name: 'values_block_values_selector',
      title: 'Wartości',
      type: 'value_selector'
    })
  ]
})
