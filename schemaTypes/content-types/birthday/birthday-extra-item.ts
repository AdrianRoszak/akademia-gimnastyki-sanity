import { defineField, defineType } from 'sanity'

export const birthdayExtraItem = defineType({
  name: 'birthday_extra_item',
  title: 'Dodatkowa usługa',
  type: 'document',
  fields: [
    defineField({
      name: 'birthday_extra_item_name',
      title: 'Nazwa dodatkowej usługi',
      type: 'string',
      description: 'Wprowadź nazwę dodatkowej usługi.',
      validation: (Rule) => Rule.required().min(3)
    }),
    defineField({
      name: 'birthday_extra_item_price',
      title: 'Cena',
      type: 'number',
      description: 'Wprowadź cenę dodatkowej usługi.',
      validation: (Rule) => Rule.required()
    })
  ]
})
