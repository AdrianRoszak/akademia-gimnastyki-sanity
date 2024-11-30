import { defineType } from 'sanity'

export const campItem = defineType({
  name: 'camp_item',
  title: 'Obóz',
  type: 'document',
  fields: [
    {
      name: 'camp_item_name',
      title: 'Nazwa obozu',
      type: 'string',
      description: 'Dodaj nazwę obozu',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'camp_item_place',
      title: 'Miejsce',
      type: 'string',
      description: 'Dodaj miejsce, w którym odbędzie się obóz',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'camp_item_price',
      title: 'Cena',
      type: 'number',
      description: 'Dodaj cenę obozu',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'camp_item_image',
      title: 'Zdjęcie',
      type: 'image_block',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'camp_item_start_date',
      title: 'Data rozpoczęcia',
      type: 'date',
      description: 'Data rozpoczęcia obozu, format: YYYY-MM-DD',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'camp_item_end_date',
      title: 'Data zakończenia',
      type: 'date',
      description: 'Data zakończenia obozu, format: YYYY-MM-DD',
      validation: (Rule) =>
        Rule.required()
          .min(Rule.valueOfField('camp_item_start_date'))
          .error('Data zakończenia musi być późniejsza niż data rozpoczęcia.')
    },
    {
      name: 'camp_item_description',
      title: 'Intro obozu',
      type: 'blockContent',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'camp_item_long_description',
      title: 'Długi opis',
      type: 'blockContent',
      description: 'Dodaj długi opis obozu',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'camp_item_program',
      title: 'Program obozu',
      type: 'blockContent',
      description: 'Dodaj program obozu'
    },
    {
      name: 'camp_item_price_details',
      title: 'Szczegóły ceny',
      type: 'blockContent',
      description: 'Dodaj elementy zawarte w cenie obozu'
    },
    {
      name: 'camp_item_gallery',
      title: 'Galeria',
      type: 'array',
      of: [{ type: 'image_block' }],
      description: 'Dodaj galerię zdjęć obozu'
    },
    {
      name: 'camp_item_slug',
      title: 'Slug',
      type: 'slug',
      description: 'Dodaj slug obozu',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'camp_item_name'
      }
    },
    {
      name: 'camp_item_meta_data_block',
      title: 'Meta dane',
      type: 'meta_data',
      description: 'Dodaj meta dane obozu'
    }
  ],
  preview: {
    select: {
      title: 'camp_item_name',
      media: 'camp_item_image'
    },
    prepare(selection) {
      return {
        title: selection.title,
        media: selection.media.image
      }
    }
  }
})
