import { defineField, defineType } from 'sanity'

export const sportItem = defineType({
  name: 'sport_item',
  title: 'Dyscyplina sportowa',
  type: 'document',
  fields: [
    defineField({
      name: 'sport_name',
      title: 'Nazwa dyscypliny',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'sport_description',
      title: 'Opis dyscypliny',
      type: 'text',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'sport_slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'sport_name'
      },
      validation: (Rule) => Rule.required()
    })
  ]
})
