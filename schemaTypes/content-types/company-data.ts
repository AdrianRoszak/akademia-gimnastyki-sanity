import { defineField, defineType } from 'sanity'

export const companyData = defineType({
  name: 'company_data',
  title: 'Dane firmy',
  type: 'document',
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
      type: 'image',
      description: 'Dodaj logo firmy, które będzie wyświetlane na stronie',
      options: {
        hotspot: true
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'company_data_phone',
      title: 'Numer telefonu',
      type: 'string',
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
    {
      name: 'company_data_address',
      title: 'Adres firmy',
      type: 'object',
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
    }
  ]
})
