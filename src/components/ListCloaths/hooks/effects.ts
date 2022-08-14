// Hooks
import { useApi } from '@/services/api'
import { useEffect } from 'react'
import {
    useCloathList,
    useRealmCurrency,
    useRealmIconCurrency,
    useRealms,
    useRefreshList,
} from '../store/listCloathState'

export const useListCloathEffect = () => {
    const { api } = useApi()

    const { refresh } = useRefreshList((state) => state)
    const { currencyRealm } = useRealmCurrency((state) => state)
    const { setRealms } = useRealms((state) => state)
    const { setCurrencyRealmIcon } = useRealmIconCurrency((state) => state)
    const { setCurrencyCloaths } = useCloathList((state) => state)

    useEffect(() => {
        api.get('/realms').then((response) => {
            const { data } = response
            setRealms(data)
        })
    }, [])

    useEffect(() => {
        api.get(`/realms?name=${currencyRealm}&_embed=cloaths`).then(
            (response) => {
                const { data } = response
                const [fistResult] = data
                const { icon, cloaths } = fistResult

                setCurrencyRealmIcon(icon)
                setCurrencyCloaths(cloaths)
            }
        )
    }, [currencyRealm, refresh])

    return {}
}
