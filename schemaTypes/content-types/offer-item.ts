import { defineField, defineType } from 'sanity'

export const offerItem = defineType({
  name: 'offerItem',
  title: 'Oferta',
  type: 'document',
  fields: [
    defineField({
      name: 'service_name',
      title: 'Nazwa usługi',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Opis',
      type: 'text',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'price',
      title: 'Cena',
      type: 'number',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Obrazek',
      type: 'image',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title'
      },
      validation: (Rule) => Rule.required()
    })
  ]
})
