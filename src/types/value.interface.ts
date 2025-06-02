export interface IValueToCustomerItem {
  title?: string
  description?: string
  tag?: string
  thumbnail?: {
    url: string
    width: number
    height: number
  }
}

export interface IValueToCustomer {
  title?: string
  value_1?: IValueToCustomerItem
  value_2?: IValueToCustomerItem
  value_3?: IValueToCustomerItem
  contact?: {
    title?: string
    url?: string
  }
}
