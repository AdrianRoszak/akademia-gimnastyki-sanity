import { defineField, defineType } from 'sanity'

export const birthday = defineType({
  name: 'birthday',
  title: 'Urodziny',
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
      name: 'birthday_title',
      title: 'Tytuł',
      type: 'string',
      initialValue: 'Urodziny',
      hidden: true
    }),
    defineField({
      name: 'birthday_banner',
      title: 'Baner',
      type: 'banner_item',
      description: 'Dodaj baner na stronie urodzin.',
      group: 'banner'
    }),
    defineField({
      name: 'birthday_intro',
      title: 'Opis wstępny',
      type: 'blockContent',
      description:
        'Dodaj opis wstępny, zachęcający do zapoznania się z propozycją.',
      group: 'intro'
    }),
    defineField({
      name: 'birthday_price_block',
      title: 'Sekcja ceny',
      type: 'birthday_price_block',
      description: 'Dodaj ceny i opisy pakietów urodzinowych.',
      group: 'price'
    }),

    defineField({
      name: 'birthday_location_block',
      title: 'Sekcja lokalizacji',
      type: 'birthday_location_block',
      description: 'Dodaj lokalizacje, w których odbywają się urodziny.',
      group: 'locations'
    }),
    defineField({
      name: 'birthday_meta_data_block',
      title: 'Meta dane',
      type: 'meta_data',
      group: 'meta'
    })
  ]
})
