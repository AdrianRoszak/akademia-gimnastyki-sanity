import { defineField, defineType } from 'sanity'

export const sportItem = defineType({
  name: 'sport_item',
  title: 'Dyscyplina sportowa',
  type: 'document',
  fields: [
    defineField({
      name: 'sport_item_name',
      title: 'Nazwa dyscypliny',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'sport_item_description',
      title: 'Opis dyscypliny',
      type: 'text',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'sport_item_slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'sport_item_name'
      },
      validation: (Rule) => Rule.required()
    })
  ]
})
