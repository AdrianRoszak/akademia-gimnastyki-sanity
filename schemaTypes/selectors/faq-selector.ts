import { defineType } from 'sanity'

export const faqSelector = defineType({
  name: 'faq_selector',
  title: 'FAQ',
  type: 'object',
  fields: [
    {
      name: 'faq_selector_list',
      title: 'Lista FAQ',
      type: 'array',
      validation: (Rule) =>
        Rule.min(1).error('Musisz dodać przynajmniej 1 element.'),
      description: 'Dodaj elementy do listy, aby wyświetlić je na stronie.',
      of: [
        {
          type: 'reference',
          title: 'Wybierz element z listy lub dodaj nowy.',
          to: [{ type: 'faq_item' }],
          validation: (Rule) =>
            Rule.error('Tylko elementy z zakładki ::FAQ:: są dozwolone.'),
          options: {
            filter: '_type == "faq_item" && !(_id in path("drafts.**"))'
          }
        }
      ]
    }
  ]
})
