export type CardCloathProps = {
    rank: string
    id: number
    realmId: number
    cloath_name: string
    image: string
    rating: string
    availability: string
    particularity: string | null
    state: string
    lost_pieces: string | null
    status: string
}

export interface ICardCloathProps {
    data: CardCloathProps
    icon: string
}
