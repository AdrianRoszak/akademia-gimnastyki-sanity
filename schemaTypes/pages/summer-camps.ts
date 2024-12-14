import { defineType } from 'sanity'

export const summerCamps = defineType({
  name: 'summer_camps',
  title: 'Półkolonie',
  type: 'document',
  fields: [
    {
      name: 'summer_camps_name',
      title: 'Tytuł strony',
      type: 'string',
      description: 'Dodaj tytuł strony półkolonii',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'summer_camps_place',
      title: 'Miejsce',
      type: 'string',
      description: 'Dodaj miejsce, w którym odbędą się półkolonie',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'summer_camps_price',
      title: 'Cena',
      type: 'number',
      description: 'Dodaj cenę półkolonii',
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
      description: 'Dodaj turnusy półkolonii'
    },
    {
      name: 'summer_camps_description',
      title: 'Intro półkolonii',
      type: 'blockContent',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'summer_camps_long_description',
      title: 'Długi opis',
      type: 'blockContent',
      description: 'Dodaj długi opis półkolonii'
    },
    {
      name: 'summer_camps_program',
      title: 'Program półkolonii',
      type: 'blockContent',
      description: 'Dodaj program półkolonii'
    },
    {
      name: 'summer_camps_price_details',
      title: 'Szczegóły ceny',
      type: 'blockContent',
      description: 'Dodaj elementy zawarte w cenie półkolonii'
    },
    {
      name: 'summer_camps_gallery',
      title: 'Galeria',
      type: 'array',
      of: [{ type: 'image_block' }],
      description: 'Dodaj galerię zdjęć półkolonii'
    },
    {
      name: 'summer_camps_meta_data_block',
      title: 'Meta dane',
      type: 'meta_data',
      description: 'Dodaj meta dane półkolonii'
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
