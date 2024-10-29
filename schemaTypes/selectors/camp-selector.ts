import { defineType } from 'sanity'

export const campSelector = defineType({
  name: 'camp_selector',
  title: 'Obozy',
  type: 'object',
  fields: [
    {
      name: 'camp_selector_list',
      title: 'Lista obozów',
      type: 'array',
      validation: (Rule) =>
        Rule.min(1)
          .max(3)
          .error('Musisz dodać przynajmniej 1 element, ale nie więcej niż 3.'),
      description: 'Możesz dodać maksymalnie 3 elementy.',
      of: [
        {
          type: 'reference',
          title: 'Wybierz element z listy lub dodaj nowy.',
          to: [{ type: 'camp_item' }],
          validation: (Rule) =>
            Rule.error('Tylko elementy z zakładki ::obozy:: są dozwolone.'),
          options: {
            filter: '_type == "camp_item" && !(_id in path("drafts.**"))'
          }
        }
      ]
    }
  ]
})
