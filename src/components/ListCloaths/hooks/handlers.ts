//Hooks
import { useApi } from '@/services/api'

// Data
import { getNotificationStyle, INITIAL_CLOATH } from '../data'

// Store
import {
    useCloathCurrency,
    useCloathList,
    useModal,
    useRefreshList,
} from '../store/listCloathState'

// Lib
import { addDays, format } from 'date-fns'
import { NotificationPlacement } from 'antd/lib/notification'

// API
import { notification, Typography } from 'antd'

// Component Deep
const { Text } = Typography

export const useListCloathHandler = () => {
    const { api } = useApi()

    // Preciso
    const { cloathCurrency, setCloathCurrency } = useCloathCurrency(
        (state) => state
    )
    const { setRefresh } = useRefreshList((state) => state)
    const { setIsOpenModal } = useModal((state) => state)
    const { setLoadingCloaths } = useCloathList((state) => state)

    const openToastNotification = (
        placement: NotificationPlacement,
        endBooking: string,
        type: 'success' | 'error'
    ) => {
        const { cloath_name, rank, rating } = cloathCurrency
        const sufixToast =
            type === 'error'
                ? 'não foi realizada por um erro, tente novamente mais tarde'
                : `foi realizada com sucesso. Esperamos sua ficha até ${format(
                      new Date(endBooking),
                      'dd/MM/yyyy às HH:mm:ss'
                  )}! 🤩🥳`
        notification[type]({
            message: `Notificação de Reserva`,
            description: `A ${rating} de ${cloath_name}, com rank ${rank} ${sufixToast}`,
            placement,
            style: getNotificationStyle(type),
            duration: 7,
        })
    }

    const handlerBookingCloath = () => {
        const { id } = cloathCurrency

        try {
            api.put(`/cloaths/${id}`, {
                ...cloathCurrency,
                status: 'reservada',
            })

            api.post('/reservations', {
                cloathId: id,
                user_name: 'taleCross',
                end_booking: format(
                    addDays(new Date(), 9),
                    'yyyy-MM-dd HH:mm:ss'
                ),
            }).then((response) => {
                const { data } = response
                const { end_booking: endBooking } = data
                openToastNotification('bottomRight', endBooking, 'success')
            })
            setRefresh()
            setCloathCurrency(INITIAL_CLOATH)
            setLoadingCloaths()

            setTimeout(() => {
                setLoadingCloaths()
            }, 7000)
        } catch (error) {
            openToastNotification('bottomRight', '', 'error')
        } finally {
            setIsOpenModal()
        }
    }

    return {
        handlerBookingCloath,
    }
}
