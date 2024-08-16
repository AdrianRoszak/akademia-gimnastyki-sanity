import { defineField, defineType } from 'sanity'

export const home = defineType({
  name: 'home',
  title: 'Strona główna',
  type: 'document',
  __experimental_formPreviewTitle: false,
  fields: [
    defineField({
      name: 'title',
      title: 'Tytuł strony',
      type: 'string',
      initialValue: 'Strona Główna'
    })
  ]
})
