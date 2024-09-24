import { defineField, defineType } from 'sanity'

export const eventItem = defineType({
  name: 'event_item',
  title: 'Wydarzenie',
  type: 'document',
  fields: [
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
      hidden: ({ document }) => !document?.event_item_template_switcher
    }),
    defineField({
      name: 'event_item_name',
      title: 'Nazwa wydarzenia',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description:
        'Dodaj nazwę wydarzenia. Będzie ona widoczna na stronie wydarzenia.',
      hidden: ({ document }) => !!document?.event_item_template_switcher
    }),
    defineField({
      name: 'event_item_image',
      title: 'Zdjęcie',
      type: 'image_block',
      validation: (Rule) => Rule.required(),
      description: 'Dodaj zdjęcie wydarzenia.',
      hidden: ({ document }) => !!document?.event_item_template_switcher
    }),
    defineField({
      name: 'event_item_description',
      title: 'Opis wydarzenia',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
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
      description: 'Dodaj datę i godzinę rozpoczęcia wydarzenia.'
    }),
    defineField({
      name: 'event_end_date',
      title: 'Data zakończenia',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
      description: 'Dodaj datę i godzinę zakończenia wydarzenia.'
    })
  ]
})
