import { defineType } from 'sanity'

export const registrationItem = defineType({
  name: 'registration_item',
  title: 'Zapisy',
  type: 'document',
  fields: [
    {
      name: 'registration_item_name',
      title: 'Nazwa zapisów',
      type: 'string'
    },
    {
      name: 'registration_code',
      title: 'Kod HTML do zapisów',
      type: 'code',
      options: {
        language: 'html'
      }
    }
  ]
})
