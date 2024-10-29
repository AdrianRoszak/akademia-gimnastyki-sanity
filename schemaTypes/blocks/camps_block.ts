import { defineType } from 'sanity'

export const campsBlock = defineType({
  name: 'camps_block',
  title: 'Obozy',
  type: 'document',
  fields: [
    {
      name: 'camps_block_heading',
      title: 'Nagłówek',
      type: 'string',
      description: 'Wprowadź nagłówek sekcji. Maksymalnie 50 znaków.',
      validation: (Rule) => Rule.required().min(3).max(50)
    },
    {
      name: 'camps_block_lead',
      title: 'Lead',
      type: 'text',
      description: 'Wprowadź krótki opis sekcji.',
      rows: 2
    },
    {
      name: 'camps_block_camps_selector',
      title: 'Obozy',
      type: 'camp_selector'
    }
  ]
})
