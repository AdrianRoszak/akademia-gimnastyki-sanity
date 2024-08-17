import { defineField, defineType } from 'sanity'

export const bannerItem = defineType({
  name: 'banner_item',
  title: 'Baner',
  type: 'document',
  fields: [
    defineField({
      name: 'banner_item_title',
      title: 'Tytuł banera',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'banner_item_subtitle',
      title: 'Podtytuł banera',
      type: 'string',
      validation: (Rule) => Rule.required()
    })
  ]
})
