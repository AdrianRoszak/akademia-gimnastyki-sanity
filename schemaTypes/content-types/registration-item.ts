import { defineField, defineType } from 'sanity'

export const registrationItem = defineType({
  name: 'registration_item',
  title: 'Zapisy',
  type: 'document',
  fields: [
    defineField({
      name: 'registration_item_name',
      title: 'Nazwa zapisów',
      type: 'string'
    }),
    defineField({
      name: 'registration_code',
      title: 'Kod HTML do zapisów',
      type: 'code',
      options: {
        language: 'html'
      }
    }),
    defineField({
      name: 'registration_item_slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'registration_item_name'
      },
      validation: (Rule) => Rule.required()
    })
  ]
})
