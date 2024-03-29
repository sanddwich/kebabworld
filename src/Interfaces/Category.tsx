import Product from './Product'

export default interface Category {
  additionalInfo?: string
  description?: string
  id: number
  images: string
  isDeleted?: boolean
  isIcludedInMenu?: boolean
  name: string
  order?: number
  products: Product[]
  seoDescription?: string
  seoKeywords?: string
  seoText?: string
  seoTitle?: string
  tags?: string
  active?: boolean

  menuGroup: string
}