// Hooks
import { useListCloathEffect } from './effects'
import { useListCloathHandler } from './handlers'

// Store
import {
    useCloathCurrency,
    useCloathList,
    useModal,
    useRealmCurrency,
    useRealmIconCurrency,
    useRealms,
    useRefreshList,
} from '../store/listCLoatState'

export const useListCloaths = () => {
    // Effects
    useListCloathEffect()

    //Handlers
    const { handlerBookingCloath } = useListCloathHandler()

    const gridList = {
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 3,
        xxl: 6,
    }

    const { realms } = useRealms((state) => state)
    const { setRefresh } = useRefreshList((state) => state)
    const { cloathCurrency, setCloathCurrency } = useCloathCurrency(
        (state) => state
    )
    const { isOpenModal, setIsOpenModal } = useModal((state) => state)
    const { currencyRealm, setCurrencyRealm } = useRealmCurrency(
        (state) => state
    )
    const { currencyRealmIcon } = useRealmIconCurrency((state) => state)
    const { currencyCloaths, loadingCloaths } = useCloathList((state) => state)

    return {
        loadingCloaths,
        setRefresh,
        setIsOpenModal,
        setCurrencyRealm,
        setCloathCurrency,
        realms,
        isOpenModal,
        handlerBookingCloath,
        gridList,
        currencyRealmIcon,
        currencyRealm,
        currencyCloaths,
        cloathCurrency,
    }
}
