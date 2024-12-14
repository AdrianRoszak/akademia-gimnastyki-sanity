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
        .id('page_camps')
        .title('Strona obozy')
        .child(S.document().schemaType('camps')),
      S.listItem()
        .id('summer_camps')
        .title('Strona półkolonie')
        .child(S.document().schemaType('summer_camps')),
      S.listItem()
        .id('birthday')
        .title('Strona urodziny')
        .child(S.document().schemaType('birthday')),
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
      S.listItem()
        .id('team_members')
        .title('Zespół')
        .child(S.documentTypeList('team_member').title('Zespół')),
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
        .id('locations')
        .title('Lokalizacje')
        .child(S.documentTypeList('location_item').title('Lokalizacje')),
      S.listItem()
        .id('company')
        .title('Dane klubu')
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
