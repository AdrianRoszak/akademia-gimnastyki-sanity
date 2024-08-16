import { defineField, defineType } from 'sanity'

export const serviceItem = defineType({
  name: 'service_item',
  title: 'Usługa',
  type: 'document',
  fields: [
    defineField({
      name: 'service_name',
      title: 'Nazwa usługi',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'service_description',
      title: 'Opis',
      type: 'text',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'service_slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'service_name'
      },
      validation: (Rule) => Rule.required()
    })
  ]
})
