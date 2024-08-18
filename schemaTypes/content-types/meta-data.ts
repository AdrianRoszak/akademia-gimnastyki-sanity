import { defineField, defineType } from 'sanity'

export const metaData = defineType({
  name: 'meta_data',
  title: 'Meta dane',
  type: 'document',
  fields: [
    defineField({
      name: 'meta_data_site_title',
      title: 'Tytuł strony',
      type: 'string',
      description: 'Wprowadź tytuł strony wyświetlany w wynikach wyszukiwania.',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'meta_data_site_description',
      title: 'Opis strony',
      type: 'text',
      description:
        'Wprowadź opis strony, który będzie wyświetlany w wynikach wyszukiwania.',
      validation: (Rule) => Rule.required()
    })
  ]
})
