import { defineType } from 'sanity'

export const summerCampsSessionBlock = defineType({
  name: 'summer_camps_session_block',
  title: 'Turnus',
  type: 'document',
  fields: [
    {
      name: 'summer_camps_session_name',
      title: 'Nazwa turnusu',
      type: 'string',
      description: 'Dodaj nazwę turnusu',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'summer_camps_start_date',
      title: 'Data rozpoczęcia',
      type: 'date',
      description: 'Data rozpoczęcia obozu, format: YYYY-MM-DD',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'summer_camps_end_date',
      title: 'Data zakończenia',
      type: 'date',
      description: 'Data zakończenia obozu, format: YYYY-MM-DD',
      validation: (Rule) =>
        Rule.required()
          .min(Rule.valueOfField('camp_item_start_date'))
          .error('Data zakończenia musi być późniejsza niż data rozpoczęcia.')
    }
  ]
})
