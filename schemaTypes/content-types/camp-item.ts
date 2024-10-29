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
      title: 'Opis obozu',
      type: 'blockContent',
      validation: (Rule) => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'camp_item_name',
      media: 'camp_item_image'
    }
  }
})
