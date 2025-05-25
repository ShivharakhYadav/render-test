export const formatPrice = (price: string): string => {
  return price.split('.')[0]
}
