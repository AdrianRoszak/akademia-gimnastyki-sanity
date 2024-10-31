import { defineField, defineType } from 'sanity'

export const birthdayLocationBlock = defineType({
  name: 'birthday_location_block',
  title: 'Lokalizacje',
  type: 'document',
  fields: [
    defineField({
      name: 'birthday_location_block_title',
      title: 'Nagłówek',
      type: 'string',
      description: 'Wprowadź nagłówek sekcji. Maksymalnie 50 znaków.',
      validation: (Rule) => Rule.required().min(3).max(50)
    }),
    defineField({
      name: 'birthday_location_block_lead',
      title: 'Lead',
      type: 'text',
      description: 'Wprowadź krótki opis sekcji.',
      rows: 2
    }),
    defineField({
      name: 'birthday_location_block_location_selector',
      title: 'Lokalizacje urodzin',
      type: 'birthday_location_selector',
      description:
        'Wybierz miejsce odbywania się urodzin z listy lub dodaj nową'
    })
  ]
})
