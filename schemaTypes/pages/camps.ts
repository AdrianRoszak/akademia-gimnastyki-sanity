import { defineField, defineType } from 'sanity'

export const camps = defineType({
  name: 'camps',
  title: 'Obozy',
  type: 'document',
  __experimental_formPreviewTitle: false,
  groups: [
    {
      title: 'Sekcja intro',
      name: 'intro'
    },
    {
      title: 'Meta',
      name: 'meta'
    }
  ],
  fields: [
    defineField({
      name: 'camps_title',
      title: 'Tytuł',
      type: 'string',
      initialValue: 'Obozy',
      hidden: true
    }),
    defineField({
      name: 'camps_page_title',
      title: 'Tytuł',
      type: 'string',
      initialValue: 'Stronna Obozów',
      description:
        'Tytuł strony FAQ, który będzie widoczny jako tytuł podstrony. Maksymalna długość to 60 znaków.',
      validation: (Rule) =>
        Rule.required().max(60).error('Maksymalna długość tytułu to 60 znaków'),
      group: 'intro'
    }),
    defineField({
      name: 'camps_intro',
      title: 'Opis wstępny',
      type: 'blockContent',
      description:
        'Dodaj opis wstępny, zachęcający do zapoznania się z propozycją.',
      group: 'intro'
    }),
    defineField({
      name: 'camps_meta_data_block',
      title: 'Meta dane',
      type: 'meta_data',
      group: 'meta'
    })
  ]
})
