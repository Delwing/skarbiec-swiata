import type { CSSProperties } from 'react'

type PositionedImageProps = {
  image: string
  x: number
  y: number
  descriptionImage: string
  descriptionText: string
  descriptionTitle: string
}

function PositionedImage({
  image,
  x,
  y,
  descriptionImage,
  descriptionText,
  descriptionTitle,
}: PositionedImageProps) {
  const style: CSSProperties = {
    position: 'absolute',
    left: x,
    top: y,
  }

  return (
    <div className="positioned-image" style={{ position: 'relative' }}>
      <img src={image} alt={descriptionTitle} style={style} />
      <div className="description">
        <img src={descriptionImage} alt={descriptionTitle} />
        <h3>{descriptionTitle}</h3>
        <p>{descriptionText}</p>
      </div>
    </div>
  )
}

export default PositionedImage
