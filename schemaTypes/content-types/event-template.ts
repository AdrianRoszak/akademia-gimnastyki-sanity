import { defineField, defineType } from 'sanity'
export const eventTemplate = defineType({
  name: 'event_item_template',
  title: 'Szablon wydarzenia',
  type: 'document',
  fields: [
    defineField({
      name: 'event_item_template_name',
      title: 'Nazwa szablonu',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description:
        'Dodaj nazwę szablonu. Będzie ona widoczna w panelu zarządzania wydarzeniami.'
    }),
    defineField({
      name: 'event_item_image',
      title: 'Zdjęcie',
      type: 'image_block',
      validation: (Rule) => Rule.required(),
      description: 'Dodaj zdjęcie wydarzenia'
    }),
    defineField({
      name: 'event_item_description',
      title: 'Opis wydarzenia',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
      description: 'Dodaj opis wydarzenia'
    })
  ],
  preview: {
    select: {
      title: 'event_item_template_name',
      media: 'event_item_image'
    },
    prepare(selection) {
      return {
        title: selection.title,
        media: selection.media.image
      }
    }
  }
})
