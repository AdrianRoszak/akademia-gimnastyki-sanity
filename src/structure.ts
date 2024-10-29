// @ts-expect-error :: There may be a problem with the types, but it's not a problem for us
export const structure = (S) =>
  S.list()
    .title('PANEL ADMINISTRACYJNY')
    .items([
      S.listItem()
        .id('home')
        .title('Strona główna')
        .child(S.document().schemaType('home')),
      S.listItem()
        .id('sports')
        .title('Dyscypliny sportowe')
        .child(
          S.documentTypeList('activity_item').title('Dyscypliny sportowe')
        ),
      S.listItem()
        .id('faq')
        .title('Strona FAQ')
        .child(S.document().schemaType('faq').title('FAQ')),
      S.divider(),
      S.listItem()
        .id('banners')
        .title('Banery')
        .child(S.documentTypeList('banner_item').title('Banery')),
      S.listItem()
        .id('values')
        .title('Wartości')
        .child(S.documentTypeList('value_item').title('Wartości')),
      S.divider(),
      S.listItem()
        .id('camps')
        .title('Obozy')
        .child(S.documentTypeList('camp_item').title('Obozy')),
      S.divider(),
      S.listItem()
        .id('events')
        .title('Wydarzenia')
        .child(S.documentTypeList('event_item').title('Wydarzenia')),
      S.listItem()
        .id('event_templates')
        .title('Szablony wydarzeń')
        .child(
          S.documentTypeList('event_item_template').title('Szablony wydarzeń')
        ),
      S.divider(),
      S.listItem()
        .id('faqs')
        .title('FAQ')
        .child(S.documentTypeList('faq_item').title('FAQ')),
      S.divider(),
      S.listItem()
        .id('company')
        .title('Dane firmy')
        .child(S.document().schemaType('company_data')),
      S.listItem()
        .id('regulations')
        .title('Regulaminy i dokumenty')
        .child(
          S.documentTypeList('regulation').title('Regulaminy i dokumenty')
        ),
      S.listItem()
        .id('registration')
        .title('Formularze zapisów')
        .child(S.document().schemaType('registration'))
    ])
