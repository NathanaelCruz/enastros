// Lib
import { createGlobalStyle } from 'styled-components'

// CSS static Ant D
import 'antd/dist/antd.css'

export const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body{
        overflow-x: hidden;
    }

    html,
    body,
    #root{
        width: 100vw;
        font-family: 'Poppins', sans-serif;
    }


`
