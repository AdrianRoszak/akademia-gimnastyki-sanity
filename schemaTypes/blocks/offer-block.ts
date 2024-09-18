import { defineField, defineType } from 'sanity'

export const offerBlock = defineType({
  name: 'offer_block',
  title: 'Oferta',
  type: 'document',
  fields: [
    defineField({
      name: 'offer_block_heading',
      title: 'Nagłówek',
      type: 'string',
      description: 'Wprowadź nagłówek sekcji. Maksymalnie 50 znaków.',
      validation: (Rule) => Rule.required().min(3).max(50)
    }),
    defineField({
      name: 'offer_block_lead',
      title: 'Lead',
      type: 'text',
      description: 'Wprowadź krótki opis sekcji.',
      rows: 2
    }),
    defineField({
      name: 'offer_block_content',
      title: 'Treść',
      type: 'blockContent',
      description: 'Wprowadź treść sekcji.'
    })
  ]
})
