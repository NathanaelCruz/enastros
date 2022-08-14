// Types
import { TypeTagProps } from './types'

export const typeColorTag: TypeTagProps = {
    tag: {
        completa: 'success',
        disponivel: 'success',
        incompleta: 'warning',
        bloqueada: 'default',
        perdida: 'error',
    },
}

export const INITIAL_CLOATH = {
    id: 1,
    cloath_name: '',
    realmId: 1,
    image: '',
    rank: '',
    rating: '',
    availability: '',
    particularity: null,
    state: '',
    lost_pieces: null,
    status: '',
}

export const getNotificationStyle = (type: 'success' | 'error') => {
    return {
        success: {
            color: 'rgba(0, 0, 0, 0.65)',
            border: '1px solid #b7eb8f',
            backgroundColor: '#f6ffed',
        },
        error: {
            color: 'rgba(0, 0, 0, 0.65)',
            border: '1px solid #ffa39e',
            backgroundColor: '#fff1f0',
        },
    }[type]
}
