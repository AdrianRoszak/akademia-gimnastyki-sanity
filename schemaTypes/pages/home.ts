import { defineField, defineType } from 'sanity'

export const home = defineType({
  name: 'home',
  title: 'Strona główna',
  type: 'document',
  __experimental_formPreviewTitle: false,
  groups: [
    {
      title: 'Sekcja banerów',
      name: 'banners'
    },
    {
      title: 'Sekcja o nas',
      name: 'about_us'
    },
    {
      title: 'Sekcja oferta',
      name: 'offer'
    },
    {
      title: 'Sekcja dyscypliny',
      name: 'activities'
    },
    {
      title: 'Sekcja wartości',
      name: 'values'
    },
    {
      title: 'Sekcja obozy',
      name: 'camps'
    },
    {
      title: 'Sekcja wydarzenia',
      name: 'events'
    },
    {
      title: 'Meta',
      name: 'meta'
    }
  ],
  fields: [
    defineField({
      name: 'home_title',
      title: 'Tytuł',
      type: 'string',
      initialValue: 'Strona Główna',
      hidden: true
    }),
    defineField({
      name: 'home_banner_selector',
      title: 'Sekcja banerów',
      type: 'banner_selector',
      description:
        'Wybierz banery z listy. Jeśli dodasz więcej niż jeden, będą wyświetlane w karuzeli. Możesz dodać maksymalnie 4 banery.',
      group: 'banners'
    }),
    defineField({
      name: 'home_about_us_block',
      title: 'Sekcja o nas',
      type: 'about_us_block',
      group: 'about_us'
    }),
    defineField({
      name: 'home_offer_block',
      title: 'Sekcja oferta',
      type: 'offer_block',
      group: 'offer',
      hidden: true
    }),
    defineField({
      name: 'home_activities_block',
      title: 'Sekcja dyscypliny',
      type: 'activities_block',
      group: 'activities'
    }),
    defineField({
      name: 'home_values_block',
      title: 'Sekcja wartości',
      type: 'values_block',
      group: 'values'
    }),
    defineField({
      name: 'home_camp_block',
      title: 'Sekcja obozy',
      type: 'camps_block',
      group: 'camps'
    }),
    defineField({
      name: 'home_events_block',
      title: 'Sekcja wydarzenia',
      type: 'events_block',
      group: 'events'
    }),
    defineField({
      name: 'home_meta_data_block',
      title: 'Meta dane',
      type: 'meta_data',
      group: 'meta'
    })
  ]
})
