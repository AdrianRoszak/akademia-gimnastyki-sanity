import { defineField, defineType } from 'sanity'

export const metaData = defineType({
  name: 'meta_data',
  title: 'Meta dane',
  type: 'document',
  description:
    'Ustawienia meta danych strony. Wprowadź tytuł i opis strony, który będzie wyświetlany w wynikach wyszukiwania.',
  fields: [
    defineField({
      name: 'meta_data_site_title',
      title: 'Tytuł strony',
      type: 'string',
      description:
        'Wprowadź tytuł strony wyświetlany w wynikach wyszukiwania. Maksymalna długość to 60 znaków.',
      validation: (Rule) =>
        Rule.required()
          .min(5)
          .max(60)
          .error('Tytuł SEO powinien mieć od 5 do 60 znaków.')
    }),
    defineField({
      name: 'meta_data_site_description',
      title: 'Opis strony',
      type: 'text',
      description:
        'Wprowadź opis strony, który będzie wyświetlany w wynikach wyszukiwania. Maksymalna długość to 200 znaków.',
      rows: 3,
      validation: (Rule) =>
        Rule.required()
          .min(5)
          .max(200)
          .error('Opis SEO musi mieć od 5 do 200 znaków.')
    })
  ]
})
