import { defineType } from 'sanity'

export const registration = defineType({
  name: 'registration',
  title: 'Zapisy',
  type: 'document',
  fields: [
    {
      name: 'registration_name',
      title: 'Tytuł',
      type: 'string'
    },
    {
      name: 'registration_events',
      title: 'Kod HTML do zapisów na wydarzenia',
      type: 'registration_item',
      description:
        'Dodaj kod HTML z serwisu ActiveNow do zapisów na wydarzenia.'
    },
    {
      name: 'registration_camps',
      title: 'Kod HTML do zapisów na obozy',
      type: 'registration_item',
      description: 'Dodaj kod HTML z serwisu ActiveNow do zapisów na obozy.'
    }
  ]
})
