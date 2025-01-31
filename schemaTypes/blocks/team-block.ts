import { defineField, defineType } from 'sanity'

export const valuesBlock = defineType({
  name: 'team_block',
  title: 'Zespół',
  type: 'object',
  fields: [
    defineField({
      name: 'team_block_title',
      title: 'Nagłówek',
      type: 'string',
      description: 'Wprowadź nagłówek sekcji. Maksymalnie 50 znaków.',
      validation: (Rule) => Rule.required().min(3).max(50)
    })
  ]
})
