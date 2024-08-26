import { defineField, defineType } from 'sanity'

import { type ImageType, validateImage } from '../utils'

export const bannerImageBlock = defineType({
  name: 'banner_image_block',
  type: 'document',
  fields: [
    defineField({
      name: 'baner_image_block_main_image',
      title: 'Zdjęcie główne',
      type: 'image_block',
      description: 'Wprowadź zdjęcie główne.',
      validation: (Rule) => [
        Rule.custom((value: { image: ImageType }) => {
          if (!value) {
            return 'Zalecane jest dodanie zdjęcia głównego'
          }
          return true
        }),
        Rule.custom((value: { image: ImageType }) => {
          if (value && value.image) {
            const { image } = value
            return validateImage(image, ['jpg', 'jpeg', 'png', 'webp'], {
              maxWidth: 1920,
              maxHeight: 950,
              minWidth: 1920,
              minHeight: 950
            })
          }
          return true // Add this line to return a valid result when value.image is undefined
        })
      ]
    }),
    defineField({
      name: 'baner_image_block_is_mobile',
      title: 'Dodać zdjęcie dla telefonów?',
      type: 'boolean',
      description:
        'Czy chcesz dodać zdjęcie dla telefonów? Jeśli nie, zostanie użyte zdjęcie z główne.'
    }),
    defineField({
      name: 'baner_image_block_mobile_image',
      title: 'Zdjęcie dla telefonów',
      type: 'image_block',
      description: 'Wprowadź zdjęcie do wyświetlenia na telefonach.',
      validation: (Rule) => [
        Rule.custom((value: { image: ImageType }) => {
          if (!value) {
            return 'Zalecane jest dodanie zdjęcia do wyświetlania na telefonach.'
          }
          return true
        }).warning(),
        Rule.custom((value: { image: ImageType }) => {
          if (value && value.image) {
            const { image } = value
            return validateImage(image, ['jpg', 'jpeg', 'png', 'webp'], {
              maxWidth: 520,
              maxHeight: 850,
              minWidth: 420,
              minHeight: 700
            })
          }
          return true // Add this line to return a valid result when value.image is undefined
        })
      ],
      hidden: ({ parent, value }) =>
        !value && !parent?.baner_image_block_is_mobile
    }),
    defineField({
      name: 'baner_image_block_is_tablet',
      title: 'Dodać zdjęcie dla tabletów?',
      type: 'boolean',
      description:
        'Czy chcesz dodać zdjęcie dla tabletów? Jeśli nie, zostanie użyte zdjęcie z główne.'
    }),
    defineField({
      name: 'baner_image_block_tablet_image',
      title: 'Zdjęcie dla tabletów',
      type: 'image_block',
      description: 'Wprowadź zdjęcie do wyświetlenia na tabletach.',
      validation: (Rule) => [
        Rule.custom((value: { image: ImageType }) => {
          if (!value) {
            return 'Zalecane jest dodanie zdjęcia do wyświetlania na tabletach.'
          }
          return true
        }).warning(),
        Rule.custom((value: { image: ImageType }) => {
          if (value && value.image) {
            const { image } = value
            return validateImage(image, ['jpg', 'jpeg', 'png', 'webp'], {
              maxWidth: 1366,
              maxHeight: 850,
              minWidth: 1024,
              minHeight: 800
            })
          }
          return true // Add this line to return a valid result when value.image is undefined
        })
      ],
      hidden: ({ parent, value }) =>
        !value && !parent?.baner_image_block_is_tablet
    })
  ]
})
