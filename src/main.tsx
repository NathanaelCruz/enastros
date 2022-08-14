// Lib
import React from 'react'
import ReactDOM from 'react-dom/client'

// Components
import App from './App'

// Global CSS
import { GlobalStyle } from './styles/global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>
)
