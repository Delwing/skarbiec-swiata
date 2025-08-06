import type {CSSProperties} from 'react'
import type {ItemDefinition} from './definitions.ts'

interface MapItemProps extends ItemDefinition {
  onClick?: () => void
}

function MapItem({image, x, y, onClick, descriptionTitle}: MapItemProps) {
  const style: CSSProperties = {
    position: 'absolute',
    left: x,
    top: y,
  }

  return (
    <div role={"button"} style={style} onClick={onClick}>
      <span className={'technical-id'}>{descriptionTitle}</span>
      <img src={image} alt={descriptionTitle} />
    </div>
  )
}

export default MapItem
