import {ILink} from '@/types/header.interface'
import {IMedia} from '@/types/media.interface'

interface IValue {
  title: string
  description: string
  thumbnail: IMedia
  tag: string
}

export interface IValueToCustomer {
  title: string
  contact: ILink
  value_1: IValue
  value_2: IValue
  value_3: IValue
}
