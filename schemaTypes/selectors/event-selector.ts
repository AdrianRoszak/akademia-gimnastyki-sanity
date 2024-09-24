import { defineType } from 'sanity'

export const eventSelector = defineType({
  name: 'event_selector',
  title: 'Wydarzenia',
  type: 'object',
  fields: [
    {
      name: 'event_selector_list',
      title: 'Lista wydarzeń',
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
          to: [{ type: 'event_item' }],
          validation: (Rule) =>
            Rule.error(
              'Tylko elementy z zakładki ::wydarzenia:: są dozwolone.'
            ),
          options: {
            filter: '_type == "event_item" && !(_id in path("drafts.**"))'
          }
        }
      ]
    }
  ]
})
