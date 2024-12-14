import { defineType } from 'sanity'

export const summerCamps = defineType({
  name: 'summer_camps',
  title: 'Półkolonie',
  type: 'document',
  fields: [
    {
      name: 'summer_camps_name',
      title: 'Nazwa obozu',
      type: 'string',
      description: 'Dodaj nazwę obozu',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'summer_camps_place',
      title: 'Miejsce',
      type: 'string',
      description: 'Dodaj miejsce, w którym odbędzie się obóz',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'summer_camps_price',
      title: 'Cena',
      type: 'number',
      description: 'Dodaj cenę obozu',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'summer_camps_image',
      title: 'Zdjęcie',
      type: 'image_block',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'summer_camps_sessions',
      title: 'Turnusy',
      type: 'array',
      of: [{ type: 'summer_camps_session_block' }],
      description: 'Dodaj turnusy obozu'
    },
    {
      name: 'summer_camps_description',
      title: 'Intro obozu',
      type: 'blockContent',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'summer_camps_long_description',
      title: 'Długi opis',
      type: 'blockContent',
      description: 'Dodaj długi opis obozu'
    },
    {
      name: 'summer_camps_program',
      title: 'Program obozu',
      type: 'blockContent',
      description: 'Dodaj program obozu'
    },
    {
      name: 'summer_camps_price_details',
      title: 'Szczegóły ceny',
      type: 'blockContent',
      description: 'Dodaj elementy zawarte w cenie obozu'
    },
    {
      name: 'summer_camps_gallery',
      title: 'Galeria',
      type: 'array',
      of: [{ type: 'image_block' }],
      description: 'Dodaj galerię zdjęć obozu'
    },
    {
      name: 'summer_camps_slug',
      title: 'Slug',
      type: 'slug',
      description: 'Dodaj slug obozu',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'summer_camps_name'
      }
    },
    {
      name: 'summer_camps_meta_data_block',
      title: 'Meta dane',
      type: 'meta_data',
      description: 'Dodaj meta dane obozu'
    }
  ],
  preview: {
    select: {
      title: 'summer_camps_name',
      media: 'summer_camps_image'
    },
    prepare(selection) {
      return {
        title: selection.title,
        media: selection.media.image
      }
    }
  }
})
