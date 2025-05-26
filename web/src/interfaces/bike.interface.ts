import { IPhoto } from './photo.interface'
export interface IBike {
  id: number
  updatedAt: string
  createdAt: string
  isFeatured: boolean
  make: {
    id: number
    name: string
    logoUrl: string | null
  }
  model: string
  rentalPrice: number
  salePrice: number
  engineSize: string
  horsepower: number
  weight: number
  topSpeed: number
  seatHeight: number
  mileageLimit: number
  overageFee: number
  type: string | null
  photos: IPhoto[]
}

export type GetBikeArgs = {
  startTime?: number
  endTime?: number
  isFeatured?: boolean
  type?: string
  model?: string
}
export type GetBikeResponse = IBike[]
