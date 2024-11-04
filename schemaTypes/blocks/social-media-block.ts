import { defineField, defineType } from 'sanity'

export const socialMediaBlock = defineType({
  name: 'social_media_block',
  title: 'Blok mediów społecznościowych',
  type: 'object',
  fields: [
    defineField({
      name: 'social_media_block_facebook',
      title: 'Facebook',
      type: 'string',
      validation: (Rule) => [
        Rule.custom((facebook: string | undefined) => {
          if (!facebook) {
            return true
          }
          return true
        }).warning(),
        Rule.custom((facebook: string | undefined) => {
          if (facebook) {
            if (!/^https:\/\/www\.facebook\.com\/.*/.test(facebook)) {
              return 'Podaj poprawny link do strony na Facebooku.'
            }
          }
          return true
        })
      ]
    }),
    defineField({
      name: 'social_media_block_instagram',
      title: 'Instagram',
      type: 'string',
      validation: (Rule) => [
        Rule.custom((instagram: string | undefined) => {
          if (!instagram) {
            return true
          }
          return true
        }).warning(),
        Rule.custom((instagram: string | undefined) => {
          if (instagram) {
            if (!/^https:\/\/www\.instagram\.com\/.*/.test(instagram)) {
              return 'Podaj poprawny link do profilu na Instagramie.'
            }
          }
          return true
        })
      ]
    }),
    defineField({
      name: 'social_media_block_youtube',
      title: 'YouTube',
      type: 'string',
      validation: (Rule) => [
        Rule.custom((youtube: string | undefined) => {
          if (!youtube) {
            return true
          }
          return true
        }).warning(),
        Rule.custom((youtube: string | undefined) => {
          if (youtube) {
            if (!/^https:\/\/www\.youtube\.com\/.*/.test(youtube)) {
              return 'Podaj poprawny link do kanału na YouTube.'
            }
          }
          return true
        })
      ]
    })
  ],
  options: {
    columns: 2
  }
})
