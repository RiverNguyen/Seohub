import {ILink} from '@/types/header.interface'

export interface ImpressivePost {
  title: string
  discovery_post: ILink
}

export interface Post {
  id: number
  title: string
  excerpt: string
  date: string
  thumbnail: string
  link: string
}
