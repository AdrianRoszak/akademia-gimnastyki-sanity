import { defineField, defineType } from 'sanity'

export const imageBlock = defineType({
  name: 'image_block',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Zdjęcie',
      type: 'image',
      options: {
        hotspot: true,
        accept: 'image/jpg, image/jpeg, image/png, image/webp'
      }
    })
  ]
})
