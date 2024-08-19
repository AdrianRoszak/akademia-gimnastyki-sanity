import { defineField, defineType } from 'sanity'

export const aboutUsBlock = defineType({
  name: 'about_us_block',
  title: 'O nas',
  type: 'document',
  fields: [
    defineField({
      name: 'about_us_block_heading',
      title: 'Nagłówek',
      type: 'string',
      description: 'Wprowadź nagłówek sekcji. Maksymalnie 50 znaków.',
      validation: (Rule) => Rule.required().min(3).max(50)
    }),
    defineField({
      name: 'about_us_block_lead',
      title: 'Lead',
      type: 'text',
      description: 'Wprowadź krótki opis sekcji.',
      rows: 2
    })
  ]
})
