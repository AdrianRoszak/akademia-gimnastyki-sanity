import { defineField, defineType } from 'sanity'

export const birthdayLocationItem = defineType({
  name: 'birthday_location_item',
  title: 'Miejsce urodzin',
  type: 'document',
  fields: [
    defineField({
      name: 'birthday_location_item_title',
      title: 'Tytuł',
      type: 'string',
      description: 'Dodaj nazwę pozycji.'
    }),
    defineField({
      name: 'birthday_location_item_location_list',
      title: 'Lokalizacja',
      type: 'array',
      of: [
        {
          type: 'reference',
          title: 'Lokalizacja',
          to: [{ type: 'location_item' }],
          description:
            'Wybierz miejsce odbywania się urodzin z listy lokalizacji. Dodaj nowe miejsce w zakładce "Lokalizacje" w panelu bocznym.',
          validation: (Rule) =>
            Rule.error(
              'Tylko elementy z zakładki ::lokalizacje:: są dozwolone.'
            ),
          options: {
            disableNew: true
          }
        }
      ]
    }),
    defineField({
      name: 'birthday_location_item_info',
      title: 'Dodatkowe informacje',
      type: 'blockContent',
      description: 'Dodaj dodatkowe informacje o miejscu.'
    }),
    defineField({
      name: 'birthday_location_item_button',
      title: 'Przycisk',
      type: 'button_block',
      description: 'Dodaj przycisk do rezerwacji urodzin.'
    })
  ]
})
