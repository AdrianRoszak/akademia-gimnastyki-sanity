import { defineField, defineType } from 'sanity'

export const faq = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  __experimental_formPreviewTitle: false,
  fields: [
    defineField({
      name: 'faq_page_title',
      title: 'Tytuł',
      type: 'string',
      initialValue: 'Strona FAQ',
      description:
        'Tytuł strony FAQ, który będzie widoczny jako tytuł podstrony. Maksymalna długość to 60 znaków.',
      validation: (Rule) =>
        Rule.required().max(60).error('Maksymalna długość tytułu to 60 znaków')
    }),
    defineField({
      name: 'faq_page_description',
      title: 'Opis',
      type: 'text',
      description:
        'Krótki opis strony FAQ, który będzie widoczny pod tytułem. Maksymalna długość to 250 znaków.',
      validation: (Rule) =>
        Rule.max(250).error('Maksymalna długość opisu to 250 znaków')
    }),
    defineField({
      name: 'faq_page_selector',
      title: 'Wybierz pytania',
      type: 'faq_selector',
      validation: (Rule) => Rule.required()
    })
  ]
})
