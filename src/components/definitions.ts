import Bear from "../assets/items/bear.svg"

export interface ItemDefinition {
    image: string
    x: number
    y: number
    descriptionImage: string
    descriptionText: string
    descriptionTitle: string
}



export const itemDefinitions: ItemDefinition[] = [
    {
        image: Bear,
        x: 0,
        y: 0,
        descriptionImage: "",
        descriptionText: "",
        descriptionTitle: ""
    }
]