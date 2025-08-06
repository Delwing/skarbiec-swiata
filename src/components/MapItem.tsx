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

  const ImageComponent = image

  console.log(ImageComponent, descriptionImage, descriptionText, descriptionTitle)

  return (
    <div role={"button"} style={style}>
      {/*<ImageComponent />*/}
    </div>
  )
}

export default MapItem
