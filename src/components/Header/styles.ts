//Lib
import styled, { css } from 'styled-components'

export const DividerStyle = {
    backgroundColor: '#fafafa',
    margin: '16px 0',
}

export const HeaderWrapper = styled.header`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.color.gray11};
`

export const HeaderTitleContent = styled.section`
    z-index: 2;
`

export const TitleHeader = styled.h1`
    font-size: 90px;
    font-weight: 700;
    color: ${(props) => props.theme.color.gray2};
    letter-spacing: 5px;
    text-shadow: 0 0 10px ${(props) => props.theme.color.gray2};
    margin: 0;
`

const HeaderContainerShadowBorder = css`
    content: '';
    top: 0;
    position: absolute;
    height: 100%;
    width: 15px;
    background-color: ${(props) => props.theme.color.gray11};
`

export const HeaderContainer = styled.div`
    height: 100%;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;

    &:after {
        ${HeaderContainerShadowBorder}
        right: 0;
        box-shadow: -10px 0px 100px 100px ${(props) => props.theme.color.gray11};
    }

    &:before {
        ${HeaderContainerShadowBorder}
        left: 0;
        box-shadow: 20px 0 100px 100px ${(props) => props.theme.color.gray11};
        z-index: 1;
    }
`

export const SubtitleHeader = styled.h2`
    font-weight: 100;
    text-align: center;
    color: ${(props) => props.theme.color.gray2};
    letter-spacing: 2px;
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

export const HeaderButtonContent = styled.div`
    position: absolute;
    bottom: 10%;
    transition: 0.3s ease-in-out;

    &:hover {
        bottom: 11%;
    }
`
