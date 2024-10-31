import { defineField, defineType } from 'sanity'

export const birthday = defineType({
  name: 'birthday',
  title: 'Urodziny',
  type: 'document',
  __experimental_formPreviewTitle: false,
  groups: [
    {
      title: 'Meta',
      name: 'meta'
    }
  ],
  fields: [
    defineField({
      name: 'birthday_title',
      title: 'Tytuł',
      type: 'string',
      initialValue: 'Urodziny',
      hidden: false
    }),
    defineField({
      name: 'birthday_banner',
      title: 'Baner',
      type: 'banner_item'
    }),
    defineField({
      name: 'birthday_intro',
      title: 'Opis wstępny',
      type: 'blockContent',
      description:
        'Dodaj opis wstępny, zachęcający do zapoznania się z propozycją.'
    }),
    defineField({
      name: 'birthday_location_block',
      title: 'Sekcja lokalizacji',
      type: 'birthday_location_block',
      description: 'Dodaj lokalizacje, w których odbywają się urodziny.'
    }),
    defineField({
      name: 'birthday_meta_data_block',
      title: 'Meta dane',
      type: 'meta_data',
      group: 'meta'
    })
  ]
})
