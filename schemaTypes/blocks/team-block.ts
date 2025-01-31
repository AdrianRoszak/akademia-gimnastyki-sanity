import { defineField, defineType } from 'sanity'

export const teamBlock = defineType({
  name: 'team_block',
  title: 'Zespół',
  type: 'object',
  fields: [
    defineField({
      name: 'team_block_title',
      title: 'Nagłówek',
      type: 'string',
      description: 'Wprowadź nagłówek sekcji. Maksymalnie 50 znaków.',
      validation: (Rule) => Rule.required().min(3).max(50)
    }),
    defineField({
      name: 'team_block_team_members',
      title: 'Członkowie zespołu',
      type: 'team_member_selector',
      description: 'Wybierz członków zespołu'
    })
  ]
})
