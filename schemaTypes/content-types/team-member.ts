import { defineField, defineType } from 'sanity'

import { type ImageType, validateImage } from '../utils'

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
      type: 'image',
      description: 'Dodaj zdjęcie członka zespołu.',
      options: {
        hotspot: true,
        accept: 'image/jpg, image/jpeg, image/png, image/webp'
      },
      validation: (Rule) => [
        Rule.custom((value: Value) => {
          if (!value) {
            return 'Zalecane jest dodanie zdjęcia osoby.'
          }
          return true
        }).warning(),
        Rule.custom((value: Value) => {
          if (value && value.image) {
            const { image } = value
            return validateImage(image, ['jpg', 'jpeg', 'png', 'webp'], {
              maxWidth: 900,
              maxHeight: 1200,
              minWidth: 750,
              minHeight: 900
            })
          }
          return true // Add this line to return a valid result when value or value.image is undefined
        })
      ]
    })
  ]
})
