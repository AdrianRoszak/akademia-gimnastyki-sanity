import { defineArrayMember, defineField, defineType } from 'sanity'

export const bannerSelector = defineType({
  name: 'banner_selector',
  title: 'Banery',
  type: 'object',
  fields: [
    defineField({
      name: 'banner_selector_list',
      title: 'Lista banerów',
      type: 'array',
      validation: (Rule) =>
        Rule.min(1)
          .max(4)
          .error('Musisz dodać przynajmniej 1 element, ale nie więcej niż 4.'),
      description: 'Możesz dodać maksymalnie 4 elementy.',
      of: [
        defineArrayMember({
          type: 'reference',
          title: 'Wybierz element z listy lub dodaj nowy.',
          to: [{ type: 'banner_item' }],
          validation: (Rule) =>
            Rule.error('Tylko elementy z zakładki ::banery:: są dozwolone.'),
          options: {
            filter: '_type == "banner_item" && !(_id in path("drafts.**"))'
          }
        })
      ]
    })
  ]
})
