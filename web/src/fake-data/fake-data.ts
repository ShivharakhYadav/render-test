import { IBike } from '@/interfaces/bike.interface'
import { IOption } from '../interfaces/common.interface'
export const FeatureBikeFakeData: IBike[] = [
  {
    id: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    isFeatured: true,
    make: {
      id: 1,
      name: 'Ducati',
      logoUrl: null,
    },
    model: 'Ducati Monster',
    rentalPrice: 200,
    salePrice: 15000,
    engineSize: '937cc',
    horsepower: 111,
    weight: 366,
    topSpeed: 150,
    seatHeight: 32,
    mileageLimit: 100,
    overageFee: 2,
    type: 'Naked',
    photos: [
      { url: '/hero-images/ducati-monster.png' },
      { url: '/hero-images/ducati-monster.png' },
      { url: '/hero-images/ducati-monster.png' },
    ],
  },
  {
    id: 2,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    isFeatured: true,
    make: {
      id: 2,
      name: 'Harley-Davidson',
      logoUrl: null,
    },
    model: 'Street Glide',
    rentalPrice: 250,
    salePrice: 20000,
    engineSize: '1746cc',
    horsepower: 90,
    weight: 796,
    topSpeed: 105,
    seatHeight: 27,
    mileageLimit: 100,
    overageFee: 3,
    type: 'Cruiser',
    photos: [
      { url: '/hero-images/harley-davidson.png' },
      { url: '/hero-images/harley-davidson.png' },
      { url: '/hero-images/harley-davidson.png' },
    ],
  },
  {
    id: 3,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    isFeatured: false,
    make: {
      id: 3,
      name: 'BMW',
      logoUrl: null,
    },
    model: 'R 1250 GS',
    rentalPrice: 220,
    salePrice: 18000,
    engineSize: '1254cc',
    horsepower: 136,
    weight: 549,
    topSpeed: 124,
    seatHeight: 33,
    mileageLimit: 100,
    overageFee: 2,
    type: 'Adventure',
    photos: [
      { url: '/hero-images/bmw-r-1250.png' },
      { url: '/hero-images/bmw-r-1250.png' },
      { url: '/hero-images/bmw-r-1250.png' },
    ],
  },
]

export const BRAND_OPTIONS: IOption[] = [
  { label: 'Ducati', value: 'Ducati' },
  { label: 'Buell', value: 'Buell' },
  { label: 'Harley', value: 'Harley' },
  { label: 'Victory', value: 'Victory' },
  { label: 'Triumph', value: 'Triumph' },
]

export const TYPE_OPTIONS: IOption[] = [
  { label: 'Sport', value: 'Sport' },
  { label: 'Cruiser', value: 'Cruiser' },
  { label: 'Touring', value: 'Touring' },
]
