import { defineField, defineType, type SanityDocument } from 'sanity'

export function validateRequiredField(
  value: string | undefined | unknown,
  document: SanityDocument | undefined
) {
  return document?.event_item_template_switcher || value
    ? true
    : 'Pole jest wymagane'
}

export const eventItem = defineType({
  name: 'event_item',
  title: 'Wydarzenie',
  type: 'document',
  fields: [
    defineField({
      name: 'event_item_name',
      title: 'Nazwa wydarzenia',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Dodaj nazwę wydarzenia.'
    }),
    defineField({
      name: 'event_item_price',
      title: 'Cena',
      type: 'number',
      validation: (Rule) => Rule.required(),
      description: 'Dodaj cenę wydarzenia.'
    }),
    defineField({
      name: 'event_item_template_switcher',
      title: 'Zastosuj szablon',
      type: 'boolean',
      description: 'Skorzystaj z szablonu wydarzenia.',
      initialValue: false
    }),
    defineField({
      name: 'event_item_template',
      title: 'Szablon wydarzenia',
      type: 'reference',
      to: [{ type: 'event_item_template' }],
      description: 'Wybierz szablon wydarzenia',
      hidden: ({ document }) => !document?.event_item_template_switcher,
      validation: (Rule) =>
        Rule.custom((value, { document }) => {
          return document?.event_item_template_switcher && !value
            ? 'Pole jest wymagane'
            : true
        })
    }),
    defineField({
      name: 'event_item_image',
      title: 'Zdjęcie',
      type: 'image_block',
      validation: (Rule) =>
        Rule.custom((value, { document }) =>
          validateRequiredField(value, document)
        ),
      description: 'Dodaj zdjęcie wydarzenia.',
      hidden: ({ document }) => !!document?.event_item_template_switcher
    }),
    defineField({
      name: 'event_item_background_color',
      title: 'Kolor tła',
      type: 'string',
      options: {
        list: [
          { title: 'Pomarańczowy', value: '#ef922e' },
          { title: 'Turkusowy', value: '#15c5cb' }
        ],
        layout: 'radio' // Umożliwia wybór w formie przycisków radiowych
      },
      description: 'Wybierz kolor tła dla elementu.',
      validation: (Rule) =>
        Rule.required().error('Pole koloru tła jest wymagane.')
    }),
    defineField({
      name: 'event_item_description',
      title: 'Opis wydarzenia',
      type: 'blockContent',
      validation: (Rule) =>
        Rule.custom((value, { document }) =>
          validateRequiredField(value, document)
        ),
      description: 'Dodaj opis wydarzenia.',
      hidden: ({ document }) => !!document?.event_item_template_switcher
    }),
    defineField({
      name: 'event_item_place',
      title: 'Miejsce',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Dodaj miejsce wydarzenia.'
    }),
    defineField({
      name: 'event_start_date',
      title: 'Data rozpoczęcia',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
      description:
        'Dodaj datę i godzinę rozpoczęcia wydarzenia. Format daty: YYYY-MM-DD HH:MM'
    }),
    defineField({
      name: 'event_end_date',
      title: 'Data zakończenia',
      type: 'datetime',
      validation: (Rule) =>
        Rule.required()
          .min(Rule.valueOfField('event_start_date'))
          .error(
            'Data zakończenia nie może być wcześniejsza niż data rozpoczęcia.'
          ),
      description:
        'Dodaj datę i godzinę zakończenia wydarzenia. Format daty: YYYY-MM-DD HH:MM'
    }),
    defineField({
      name: 'event_item_link',
      title: 'Link do zapisów',
      type: 'url',
      description: 'Dodaj link do zapisów na wydarzenie.',
      validation: (Rule) => [
        Rule.custom((url) => {
          if (!url) {
            return true // Allow empty values (handled by required() rule)
          }
          return true
        }).warning()
        // Rule.custom((url) => {
        //   if (!url) {
        //     return true // Allow empty values (handled by required() rule)
        //   }
        //   const regex =
        //     /^https:\/\/(www\.)?([a-zA-Z0-9\-]+\.)?[a-zA-Z0-9\-]+\.[a-zA-Z]{2,}(\/[a-zA-Z0-9\-_\/]*)?$/
        //   return regex.test(url)
        //     ? true
        //     : 'Link musi być poprawnym adresem URL, np. https://example.com'
        // })
      ]
    })
  ],
  preview: {
    select: {
      title: 'event_item_name',
      media: 'event_item_image',
      refMedia: 'event_item_template.event_item_image'
    },
    prepare(selection) {
      const media = selection.media.image
        ? selection.media.image
        : selection.refMedia.image
      const title = selection.title

      return {
        title,
        media
      }
    }
  }
})
