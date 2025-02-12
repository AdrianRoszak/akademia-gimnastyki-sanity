import { defineField, defineType } from 'sanity'

export const bannerItem = defineType({
  name: 'banner_item',
  title: 'Baner',
  type: 'document',
  fields: [
    defineField({
      name: 'banner_item_heading',
      title: 'Nagłówek banera',
      type: 'string',
      description:
        'Wprowadź nagłówek banera, który powinien zawierać od 3 do 50 znaków',
      validation: (Rule) => Rule.required().min(3).max(50)
    }),
    defineField({
      name: 'banner_item_lead',
      title: 'Opis banera',
      type: 'string',
      description:
        'Wprowadź opis banera, który powinien zawierać od 20 do 100 znaków',
      validation: (Rule) => Rule.warning().min(20).max(100)
    }),
    defineField({
      name: 'banner_item_images',
      title: 'Zdjęcia banera',
      type: 'banner_image_block',
      description: 'Wprowadź zdjęcia banera.'
    }),
    defineField({
      name: 'banner_item_button',
      title: 'Przycisk na banerze',
      type: 'button_block',
      description: 'Dodaj odnośnik do przycisku na banerze (opcjonalnie).'
    }),
    defineField({
      name: 'banner_item_internal_link',
      title: 'Link wewnętrzny',
      type: 'reference',
      to: [{ type: 'registration_item' }],
      description: 'Wybierz stronę wewnętrzną, do której ma prowadzić przycisk.'
    })
  ],
  preview: {
    select: {
      title: 'banner_item_heading',
      media: 'banner_item_images.baner_image_block_main_image'
    },
    prepare(selection) {
      const { title, media } = selection

      return {
        title,
        media: media.image
      }
    }
  }
})
