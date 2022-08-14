// Types
import { CardCloathProps } from '../components/CardCloath/types'

type RealmProps = {
    id: number
    name: string
    friendly_name: string
    icon: string
}

export type RealmsProps = {
    realms: Array<RealmProps>
    setRealms: (realms: Array<RealmProps>) => void
}

export type RealmCurrencyProps = {
    currencyRealm: string
    setCurrencyRealm: (currencyRealm: string) => void
}

export type RealmIconCurrencyProps = {
    currencyRealmIcon: string
    setCurrencyRealmIcon: (currencyRealmIcon: string) => void
}

export type CloathsProps = {
    currencyCloaths: Array<CardCloathProps>
    loadingCloaths: boolean
    setCurrencyCloaths: (currencyCloaths: Array<CardCloathProps>) => void
    setLoadingCloaths: () => void
}

export type CloathProps = {
    cloathCurrency: CardCloathProps
    setCloathCurrency: (cloathCurrency: CardCloathProps) => void
}

export type ModalProps = {
    isOpenModal: boolean
    setIsOpenModal: () => void
}

type ToastProps = {
    isOpen: boolean
    type: 'error' | 'success'
    cloath: CardCloathProps
    endBooking: string
}

export type NotificationProps = {
    toast: ToastProps
    setToast: (dataToast: ToastProps) => void
}

export type RefreshListProps = {
    refresh: boolean
    setRefresh: () => void
}
