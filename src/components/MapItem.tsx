import type {CSSProperties} from 'react'
import type {ItemDefinition} from './definitions.ts'

interface MapItemProps extends ItemDefinition {
  onClick?: () => void
}

function MapItem({image, x, y, onClick}: MapItemProps) {
  const style: CSSProperties = {
    position: 'absolute',
    left: x,
    top: y,
  }

  const ImageComponent = image

  return (
    <div role={"button"} style={style} onClick={onClick}>
      <ImageComponent/>
    </div>
  )
}

export default MapItem
