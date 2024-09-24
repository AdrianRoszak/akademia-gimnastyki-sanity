import { defineField, defineType } from 'sanity'

export const eventsBlock = defineType({
  name: 'events_block',
  title: 'Wydarzenia',
  type: 'document',
  fields: [
    defineField({
      name: 'events_block_heading',
      title: 'Nagłówek',
      type: 'string',
      description: 'Wprowadź nagłówek sekcji. Maksymalnie 50 znaków.',
      validation: (Rule) => Rule.required().min(3).max(50)
    }),
    defineField({
      name: 'events_block_lead',
      title: 'Lead',
      type: 'text',
      description: 'Wprowadź krótki opis sekcji.',
      rows: 2
    }),
    defineField({
      name: 'events_block_events_selector',
      title: 'Wydarzenia',
      type: 'event_selector'
    })
  ]
})
