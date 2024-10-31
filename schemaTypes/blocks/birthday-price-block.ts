import { defineField, defineType } from 'sanity'

export const birthdayPriceBlock = defineType({
  name: 'birthday_price_block',
  title: 'Cena urodzin',
  type: 'document',
  fields: [
    defineField({
      name: 'birthday_price_block_heading',
      title: 'Nagłówek sekcji',
      type: 'string',
      description: 'Wprowadź nagłówek sekcji. Maksymalnie 50 znaków.',
      validation: (Rule) => Rule.required().min(3).max(50)
    }),
    defineField({
      name: 'birthday_price_block_lead',
      title: 'Lead',
      type: 'text',
      description: 'Wprowadź krótki opis sekcji.',
      rows: 2
    }),
    defineField({
      name: 'birthday_price_block_price',
      title: 'Cena',
      type: 'number',
      description: 'Dodaj cenę urodzin',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'birthday_price_block_description',
      title: 'Opis ceny',
      type: 'blockContent',
      description: 'Dodaj informacje o tym, co zawiera cena.'
    }),
    defineField({
      name: 'birthday_price_block_extra_services',
      title: 'Dodatkowe usługi',
      type: 'array',
      of: [{ type: 'birthday_extra_item' }],
      description: 'Dodaj dodatkowe usługi do pakietu urodzinowego.'
    })
  ]
})
