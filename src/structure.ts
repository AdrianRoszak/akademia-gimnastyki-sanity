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
        .id('offer')
        .title('Usługi')
        .child(S.documentTypeList('service_item'))
    ])
