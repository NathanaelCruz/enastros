//colors
import { presetDarkPalettes } from '@ant-design/colors'
import styled from 'styled-components'

export const HeaderWrapper = styled.header`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${presetDarkPalettes.grey[1]};
`

export const TitlHeader = styled.h1`
    font-size: 90px;
    font-weight: 700;
    color: #fafafa;
    letter-spacing: 5px;
    text-shadow: 0 0 10px #fafafa;
    margin: 0;
`

export const HeaderTitleContent = styled.section`
    z-index: 2;
`

export const HeaderButtonContent = styled.div`
    position: absolute;
    bottom: 10%;
    transition: 0.3s ease-in-out;

    &:hover {
        bottom: 11%;
    }
`

export const HeaderContainer = styled.div`
    height: 100%;
    width: 60%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:after {
        content: '';
        height: 100%;
        right: 0;
        width: 15px;
        background-color: ${presetDarkPalettes.grey[1]};
        top: 0;
        position: absolute;
        box-shadow: -10px 0px 100px 100px ${presetDarkPalettes.grey[1]};
    }

    &:before {
        content: '';
        height: 100%;
        left: 0;
        width: 15px;
        background-color: ${presetDarkPalettes.grey[1]};
        top: 0;
        position: absolute;
        box-shadow: 20px 0 100px 100px ${presetDarkPalettes.grey[1]};
        z-index: 1;
    }
`

export const SubtitleHeader = styled.h2`
    color: #fafafa;
    letter-spacing: 2px;
    font-weight: 100;
    text-align: center;
`

export const HeaderImage = styled.img`
    position: absolute;
    top: 0;
    left: -50%;
    right: -50%;
    bottom: 0;
    margin: 0 auto;
    min-height: 100%;
    mix-blend-mode: Color-Dodge;
`
