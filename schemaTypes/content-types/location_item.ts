import { defineField, defineType } from 'sanity'

export const locationItem = defineType({
  name: 'location_item',
  title: 'Lokalizacja',
  type: 'document',
  fields: [
    defineField({
      name: 'location_item_name',
      title: 'Nazwa lokalizacji',
      type: 'string',
      description: 'Dodaj nazwę lokalizacji',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'location_item_description',
      title: 'Opis lokalizacji',
      type: 'text',
      description: 'Dodaj opis lokalizacji',
      validation: (Rule) => Rule.required(),
      rows: 3
    }),
    defineField({
      name: 'location_item_image',
      title: 'Zdjęcie lokalizacji',
      type: 'image_block',
      description: 'Dodaj zdjęcie lokalizacji'
    }),
    defineField({
      name: 'location_item_address',
      title: 'Adres',
      type: 'text',
      description: 'Dodaj adres lokalizacji',
      validation: (Rule) => Rule.required(),
      rows: 2
    }),
    defineField({
      name: 'location_item_gallery',
      title: 'Galeria',
      type: 'array',
      of: [{ type: 'image_block' }],
      description: 'Dodaj galerię zdjęć lokalizacji'
    }),
    defineField({
      name: 'location_item_slug',
      title: 'Slug',
      type: 'slug',
      description: 'Dodaj slug lokalizacji',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'location_item_name'
      }
    }),
    defineField({
      name: 'location_item_meta_data_block',
      title: 'Meta dane',
      type: 'meta_data',
      description: 'Dodaj meta dane lokalizacji'
    })
  ]
})
