import { defineField, defineType } from 'sanity'

export const activityItem = defineType({
  name: 'activity_item',
  title: 'Dyscyplina sportowa',
  type: 'document',
  fields: [
    defineField({
      name: 'activity_item_name',
      title: 'Nazwa dyscypliny',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'activity_item_image',
      title: 'Zdjęcie',
      type: 'image_block',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'activity_item_description',
      title: 'Opis dyscypliny',
      type: 'text',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'activity_item_slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'sport_item_name'
      },
      validation: (Rule) => Rule.required()
    })
  ]
})
