import { defineField, defineType } from 'sanity'

export const regulationSchema = defineType({
  name: 'regulation',
  title: 'Dokument regulacyjny',
  type: 'document',
  fields: [
    defineField({
      name: 'regulation_heading',
      title: 'Nagłówek dokumentu',
      type: 'string',
      description:
        'Wprowadź nagłówek regulacji, który powinien zawierać od 3 do 120 znaków',
      validation: (Rule) => Rule.required().min(3).max(120)
    }),
    defineField({
      name: 'regulation_lead',
      title: 'Wprowadzenie do dokumentu',
      type: 'string',
      description:
        'Możesz wprowadzić opis regulacji, który powinien zawierać od 20 do 250 znaków',
      validation: (Rule) => Rule.warning().min(20).max(250)
    }),
    defineField({
      name: 'regulation_body',
      title: 'Treść dokumentu',
      type: 'blockContent',
      description: 'Wprowadź treść regulacji.',
      validation: (Rule) => Rule.required()
    })
  ]
})
