import { defineType } from 'sanity'

export const registrationBlock = defineType({
  name: 'registration_block',
  title: 'Zapisy',
  type: 'document',
  fields: [
    {
      name: 'registration_block_name',
      title: '',
      type: 'registration_item'
    }
  ]
})
