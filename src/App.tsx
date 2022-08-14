// Lib
import { ThemeProvider } from 'styled-components'

// Components
import ListCloaths from './components/ListCloaths'
import Header from './components/Header'

// Theme
import theme from './styles/theme'

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <ListCloaths />
        </ThemeProvider>
    )
}

export default App
