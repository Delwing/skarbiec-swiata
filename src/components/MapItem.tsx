import type { CSSProperties } from 'react'
import type {ItemDefinition} from "./definitions.ts";

function MapItem({
  image,
  x,
  y,
  descriptionImage,
  descriptionText,
  descriptionTitle,
}: ItemDefinition) {
  const style: CSSProperties = {
    position: 'absolute',
    left: x,
    top: y,
  }

  console.log(descriptionImage, descriptionText, descriptionTitle)

  return (
    <div style={style}>
      <img src={image} alt={descriptionTitle}  />
    </div>
  )
}

export default MapItem
