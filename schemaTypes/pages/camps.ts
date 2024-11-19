import { defineField, defineType } from 'sanity'

export const camps = defineType({
  name: 'camps',
  title: 'Obozy',
  type: 'document',
  __experimental_formPreviewTitle: false,
  groups: [
    {
      title: 'Baner',
      name: 'banner'
    },
    {
      title: 'Sekcja intro',
      name: 'intro'
    },
    {
      title: 'Sekcja ceny',
      name: 'price'
    },
    {
      title: 'Sekcja lokalizacji',
      name: 'locations'
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
      initialValue: 'Urodziny',
      hidden: true
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
