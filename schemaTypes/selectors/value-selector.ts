import { defineArrayMember, defineField, defineType } from 'sanity'

export const valueSelector = defineType({
  name: 'value_selector',
  title: 'Lista wartości',
  type: 'object',
  fields: [
    defineField({
      name: 'value_selector_list',
      title: 'Lista Wartości',
      type: 'array',
      description:
        'Dodaj elementy do listy, możesz dodać maksymalnie 8 elementów.',
      validation: (Rule) =>
        Rule.min(1)
          .max(8)
          .error('Musisz dodać przynajmniej 1 element, ale nie więcej niż 8.'),
      of: [
        defineArrayMember({
          type: 'reference',
          title: 'Wybierz element z listy lub dodaj nowy.',
          to: [{ type: 'value_item' }],
          validation: (Rule) =>
            Rule.error('Tylko elementy z zakładki ::wartości:: są dozwolone.'),
          options: {
            filter: '_type == "value_item" && !(_id in path("drafts.**"))'
          }
        })
      ]
    })
  ]
})
