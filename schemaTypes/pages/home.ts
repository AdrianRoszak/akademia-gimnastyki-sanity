import { defineField, defineType } from 'sanity'

export const home = defineType({
  name: 'home',
  title: 'Strona główna',
  type: 'document',
  __experimental_formPreviewTitle: false,
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
        'Wybierz banery z listy. Jeśli dodasz więcej niż jeden, będą wyświetlane w karuzeli.'
    }),
    defineField({
      name: 'home_values_block',
      title: 'Sekcja wartości',
      type: 'values_block'
    }),
    defineField({
      name: 'home_about_us_block',
      title: 'Sekcja o nas',
      type: 'about_us_block'
    })
  ]
})
