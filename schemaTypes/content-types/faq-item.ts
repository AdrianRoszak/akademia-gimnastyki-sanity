import { defineField, defineType } from 'sanity'

export const faqItem = defineType({
  name: 'faq_item',
  title: 'FAQ',
  type: 'document',
  icon: () => '❓',
  __experimental_formPreviewTitle: false,
  fields: [
    defineField({
      name: 'faq_item_question',
      title: 'Pytanie',
      type: 'string',
      description: 'Krótkie pytanie, które będzie widoczne na stronie FAQ.',
      validation: (Rule) =>
        Rule.required()
          .min(3)
          .max(120)
          .warning('Długość tekstu powinna mieć od 3 do 120 znaków')
    }),
    defineField({
      name: 'faq_item_answer',
      title: 'Odpowiedź',
      type: 'blockContent',
      description:
        'Odpowiedź na pytanie, będzie widoczna po kliknięciu na pytanie.',
      validation: (Rule) => Rule.required()
    })
  ]
})
