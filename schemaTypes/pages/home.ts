import { defineField, defineType } from 'sanity'

export const home = defineType({
  name: 'home',
  title: 'Strona główna',
  type: 'document',
  __experimental_formPreviewTitle: false,
  fields: [
    defineField({
      name: 'title',
      title: 'Tytuł',
      type: 'string',
      initialValue: 'Strona Główna'
    }),
    defineField({
      name: 'banner',
      title: 'Baner',
      type: 'banner_selector',
      description:
        'Wybierz banery z listy. Jeśli dodasz więcej niż jeden, będą wyświetlane w karuzeli.'
    })
  ]
})
