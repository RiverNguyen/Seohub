import {IMedia} from '@/types/media.interface'

export interface ILink {
  title: string
  url: string
  target: string
}

export interface Header {
  logo: IMedia
  menu: {
    link: ILink
  }[]
  contact: ILink
  cta: {
    link_facebook: ILink
    link_zalo: ILink
    cta_quote: {
      title: string
      desc: string
      link: ILink
    }
  }
}
