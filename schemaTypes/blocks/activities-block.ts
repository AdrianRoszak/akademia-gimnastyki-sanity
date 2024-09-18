import { defineField, defineType } from 'sanity'

export const activitiesBlock = defineType({
  name: 'activities_block',
  title: 'Dyscypliny',
  type: 'document',
  fields: [
    defineField({
      name: 'activities_block_heading',
      title: 'Nagłówek',
      type: 'string',
      description: 'Wprowadź nagłówek sekcji. Maksymalnie 50 znaków.',
      validation: (Rule) => Rule.required().min(3).max(50)
    }),
    defineField({
      name: 'activities_block_lead',
      title: 'Lead',
      type: 'text',
      description: 'Wprowadź krótki opis sekcji.',
      rows: 2
    }),
    defineField({
      name: 'activities_block_activities_selector',
      title: 'Dyscypliny',
      type: 'activity_selector'
    })
  ]
})
