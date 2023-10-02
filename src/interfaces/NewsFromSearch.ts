export interface NewsFromSearch {
  abstract: string
  web_url: string
  snippet: string
  lead_paragraph: string
  print_page: string
  source: string
  multimedia: Multimedia[]
  headline: {
    main: string
    kicker: string | null
    content_kicker: string | null
    print_headline: string
    name: string | null
    seo: string | null
    sub: string | null
  }
  keywords: {
    name: string
    value: string
    rank: number
    major: string
  }[]
  pub_date: string
  document_type: string
  news_desk: string
  section_name: string
  byline: {
    original: string | null
    person: Journalist[] 
    organization: string | null
  }
  type_of_material: string
  _id: string
  word_count: number
  uri: string
}

interface Multimedia {
  rank: number
  subtype: string
  caption: string | null
  credit: string | null
  type: string
  url: string
  height: number
  width: number
  legacy: {
      xlarge: string
      xlargewidth: number
      xlargeheight: number
  }
  subType: string
  crop_name: string
}

interface Journalist {
  firstname: string
  middlename: string | null
  lastname: string
  qualifier: string | null
  title: string | null
  role: string
  organization: string
  rank: number
}
