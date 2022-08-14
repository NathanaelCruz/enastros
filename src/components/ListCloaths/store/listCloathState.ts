// Lib
import create from 'zustand'
import { INITIAL_CLOATH } from '../data'

//props
import {
    CloathProps,
    CloathsProps,
    ModalProps,
    RealmCurrencyProps,
    RealmIconCurrencyProps,
    RealmsProps,
    RefreshListProps,
} from './types'

export const useRealms = create<RealmsProps>((set) => ({
    realms: [],
    setRealms: (realms) => set(() => ({ realms: realms })),
}))

export const useRealmCurrency = create<RealmCurrencyProps>((set) => ({
    currencyRealm: 'atena',
    setCurrencyRealm: (currencyRealm) =>
        set(() => ({ currencyRealm: currencyRealm })),
}))

export const useRealmIconCurrency = create<RealmIconCurrencyProps>((set) => ({
    currencyRealmIcon: 'https://joeschmoe.io/api/v1/random',
    setCurrencyRealmIcon: (currencyRealmIcon) =>
        set(() => ({ currencyRealmIcon: currencyRealmIcon })),
}))

export const useCloathList = create<CloathsProps>((set) => ({
    currencyCloaths: [],
    loadingCloaths: false,
    setCurrencyCloaths: (currencyCloaths) =>
        set(() => ({ currencyCloaths: currencyCloaths })),
    setLoadingCloaths: () =>
        set((state) => ({ loadingCloaths: !state.loadingCloaths })),
}))

export const useCloathCurrency = create<CloathProps>((set) => ({
    cloathCurrency: INITIAL_CLOATH,
    setCloathCurrency: (cloathCurrency) =>
        set(() => ({ cloathCurrency: cloathCurrency })),
}))

export const useModal = create<ModalProps>((set) => ({
    isOpenModal: false,
    setIsOpenModal: () => set((state) => ({ isOpenModal: !state.isOpenModal })),
}))

export const useRefreshList = create<RefreshListProps>((set) => ({
    refresh: false,
    setRefresh: () => set((state) => ({ refresh: !state.refresh })),
}))
