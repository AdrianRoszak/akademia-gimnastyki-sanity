import { getExtension, getImageDimensions } from '@sanity/asset-utils'

export type ImageType = {
  _type: string
  asset: {
    _ref: string
    _type: string
  }
}

export type ImageFileType = Array<'jpg' | 'jpeg' | 'png' | 'webp'>
export type ImageDimensions = {
  maxWidth: number
  maxHeight: number
  minWidth: number
  minHeight: number
}

export function validateImage(
  image: ImageType,
  fileTypes: ImageFileType,
  dimensions: ImageDimensions
) {
  if (!image) {
    return 'Zdjęcie jest wymagane'
  }

  const fileType = getExtension(image.asset._ref)
  if (!fileTypes.includes(fileType as ImageFileType[number])) {
    return 'Miniatura zdjęcia musi być w formacie JPG lub PNG lub WEBP.'
  }

  const { width, height } = getImageDimensions(image.asset._ref)
  const { maxWidth, maxHeight, minWidth, minHeight } = dimensions

  if (
    width > maxWidth ||
    height > maxHeight ||
    width < minWidth ||
    height < minHeight
  ) {
    return (
      `Minimalne wymiary miniatury to ${minWidth}x${minHeight}px, ` +
      `a maksymalne ${maxWidth}x${maxHeight}px.`
    )
  }

  return true
}
