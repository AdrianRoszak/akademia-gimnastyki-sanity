import { defineArrayMember, defineField, defineType } from 'sanity'

export const activitySelector = defineType({
  name: 'activity_selector',
  title: 'Dyscypliny',
  type: 'object',
  fields: [
    defineField({
      name: 'activity_selector_list',
      title: 'Lista dyscyplin',
      type: 'array',
      description: 'Dodaj elementy do listy.',
      of: [
        defineArrayMember({
          type: 'reference',
          title: 'Wybierz dyscyplinę z listy lub dodaj nową.',
          to: [{ type: 'activity_item' }],
          validation: (Rule) =>
            Rule.error(
              'Tylko elementy z zakładki ::dyscypliny:: są dozwolone.'
            ),
          options: {
            filter: '_type == "activity_item" && !(_id in path("drafts.**"))'
          }
        })
      ]
    })
  ]
})
