import { defineField, defineType } from 'sanity'

export const companyData = defineType({
  name: 'company_data',
  title: 'Dane firmy',
  type: 'document',
  groups: [
    {
      title: 'Dane firmy',
      name: 'data'
    },
    {
      title: 'Dane adresowe',
      name: 'address'
    },
    {
      title: 'Media społecznościowe',
      name: 'social_media'
    },
    {
      title: 'Dane konta',
      name: 'account'
    }
  ],
  fields: [
    defineField({
      name: 'company_data_name',
      title: 'Nazwa firmy',
      type: 'string',
      description: 'Wprowadź nazwę firmy, która będzie wyświetlana na stronie',
      validation: (Rule) => Rule.required().error('Nazwa firmy jest wymagana.')
    }),
    defineField({
      name: 'company_data_logo',
      title: 'Logo firmy',
      type: 'image_block',
      description: 'Dodaj logo firmy, które będzie wyświetlane na stronie'
    }),
    {
      name: 'company_data_address',
      title: 'Adres firmy',
      type: 'object',
      group: 'address',
      description: 'Wprowadź adres firmy, który będzie wyświetlany na stronie',
      fields: [
        defineField({
          name: 'company_data_address_street',
          title: 'Ulica',
          type: 'string'
        }),
        defineField({
          name: 'company_data_address_number',
          title: 'Numer',
          type: 'number'
        }),
        defineField({
          name: 'company_data_address_city',
          title: 'Miasto',
          type: 'string'
        }),
        defineField({
          name: 'company_data_address_postal_code',
          title: 'Kod pocztowy',
          type: 'string'
        })
      ],
      options: {
        columns: 2
      }
    },
    defineField({
      name: 'company_data_phone',
      title: 'Numer telefonu',
      type: 'string',
      group: 'address',
      description:
        'Wprowadź numer telefonu, który będzie wyświetlany na stronie',
      validation: (Rule) =>
        Rule.custom((phone: string | undefined) => {
          if (!phone) {
            return 'Numer telefonu jest wymagany.'
          }
          const strippedNumber = phone.slice(3)
          if (!phone.startsWith('+48')) {
            return 'Numer telefonu powinien zaczynać się od +48.'
          }
          if (!/^\d{9}$/i.test(strippedNumber)) {
            return 'Numer telefonu powinien składać się z 9 cyfr po prefiksie.'
          }
          return true
        })
    }),
    defineField({
      name: 'company_data_email',
      title: 'Adres email',
      type: 'string',
      group: 'address',
      description: 'Wprowadź adres email, który będzie wyświetlany na stronie',
      validation: (Rule) =>
        Rule.custom((email) => {
          if (!email) {
            return 'Email jest wymagany.'
          }
          if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email as string)
          ) {
            return 'Podaj poprawny adres email.'
          }
          return true
        })
    }),

    defineField({
      name: 'company_data_social_media',
      title: 'Media społecznościowe',
      type: 'social_media_block',
      description:
        'Podaj linki do profili w mediach społecznościowych, aby klienci mogli Cię znaleźć.',
      group: 'social_media'
    }),
    defineField({
      name: 'company_data_account_details',
      title: 'Dane konta',
      type: 'object',
      group: 'account',
      description: 'Wprowadź dane konta, które będą wyświetlane na stronie',
      fields: [
        defineField({
          name: 'company_data_account_details_name',
          title: 'Nazwa odbiorcy',
          type: 'string',
          description: 'Wprowadź nazwę odbiorcy przelewu.'
        }),
        defineField({
          name: 'company_data_account_details_description',
          title: 'Tytuł przelewu',
          type: 'string',
          description:
            'Wprowadź tytuł przelewu, aby klienci mogli zidentyfikować płatność.'
        }),
        defineField({
          name: 'company_data_account_number',
          title: 'Numer konta bankowego',
          type: 'string',
          description: 'Wprowadź numer konta bankowego.'
        })
      ]
    })
  ]
})
