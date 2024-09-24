// @ts-expect-error :: There may be a problem with the types, but it's not a problem for us
export const structure = (S) =>
  S.list()
    .title('PANEL ADMINISTRACYJNY')
    .items([
      S.listItem()
        .id('home')
        .title('Strona główna')
        .child(S.document().schemaType('home')),
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
        .id('events')
        .title('Wydarzenia')
        .child(S.documentTypeList('event_item').title('Wydarzenia')),
      S.divider(),
      S.listItem()
        .id('sports')
        .title('Dyscypliny sportowe')
        .child(
          S.documentTypeList('activity_item').title('Dyscypliny sportowe')
        ),
      S.divider(),
      S.listItem()
        .id('company')
        .title('Dane firmy')
        .child(S.document().schemaType('company_data'))
    ])
