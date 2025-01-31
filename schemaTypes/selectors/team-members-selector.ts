import { defineType } from 'sanity'

export const teamMemberSelector = defineType({
  name: 'team_member_selector',
  title: 'FAQ',
  type: 'object',
  fields: [
    {
      name: 'team_member_selector_list',
      title: 'Lista FAQ',
      type: 'array',
      validation: (Rule) =>
        Rule.min(1).error('Musisz dodać przynajmniej 1 element.'),
      description: 'Dodaj elementy do listy, aby wyświetlić je na stronie.',
      of: [
        {
          type: 'reference',
          title: 'Wybierz element z listy lub dodaj nowy.',
          to: [{ type: 'team_member' }],
          validation: (Rule) =>
            Rule.error('Tylko elementy z zakładki ::Zespół:: są dozwolone.'),
          options: {
            filter: '_type == "faq_item" && !(_id in path("drafts.**"))'
          }
        }
      ]
    }
  ]
})
