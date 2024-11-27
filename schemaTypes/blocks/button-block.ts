import { defineField, defineType } from 'sanity'

export const buttonBlock = defineType({
  name: 'button_block',
  title: 'Odnośnik',
  type: 'document',
  fields: [
    defineField({
      name: 'button_block_text',
      title: 'Tekst przycisku',
      type: 'string',
      description:
        'Wprowadź tekst przycisku, który powinien zawierać od 3 do 50 znaków',
      validation: (Rule) => Rule.required().min(3).max(50)
    }),
    defineField({
      name: 'button_block_link',
      title: 'Odnośnik',
      type: 'string',
      description: 'Wprowadź odnośnik przycisku'
    })
  ]
})
