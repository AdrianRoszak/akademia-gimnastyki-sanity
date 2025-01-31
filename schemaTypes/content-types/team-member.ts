import { defineField, defineType } from 'sanity'

import { type ImageType } from '../utils'
import { validateRequiredField } from './event-item'

export type Value =
  | {
      image: ImageType
    }
  | undefined

export const teamMember = defineType({
  name: 'team_member',
  title: 'Członek zespołu',
  type: 'document',
  fields: [
    defineField({
      name: 'team_member_name',
      title: 'Imię i nazwisko',
      type: 'string',
      description: 'Wprowadź imię i nazwisko członka zespołu.',
      validation: (Rule) => Rule.required().min(3)
    }),
    defineField({
      name: 'team_member_bio',
      title: 'Bio',
      type: 'text',
      rows: 4,
      description: 'Dodaj krótkie bio członka zespołu.'
    }),
    defineField({
      name: 'team_member_image',
      title: 'Zdjęcie',
      type: 'image_block',
      description: 'Dodaj zdjęcie członka zespołu.',
      validation: (Rule) =>
        Rule.custom((value, { document }) =>
          validateRequiredField(value, document)
        )
    })
  ]
})
