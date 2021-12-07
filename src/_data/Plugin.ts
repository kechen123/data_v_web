export interface Rect{
    left:number
    right:number
    width:number
    height:number
}

export interface Plug {
    name: string
    rect?:Rect
}