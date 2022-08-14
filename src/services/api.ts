// Lib
import axios from 'axios'

export const useApi = () => {
    const api = axios.create({
        baseURL: import.meta.env.VITE_API_BASE_URL,
    })

    return { api }
}
