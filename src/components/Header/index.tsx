// Styles
import * as S from './styles'

// Components
import { Button, Divider } from 'antd'

// Icons
import { DownOutlined } from '@ant-design/icons'

const Header = () => {
    return (
        <S.HeaderWrapper>
            <S.HeaderContainer>
                <S.HeaderTitleContent>
                    <S.TitleHeader>έναστρος</S.TitleHeader>
                    <Divider style={S.DividerStyle} />
                    <S.SubtitleHeader>Qual sua constelação?</S.SubtitleHeader>
                </S.HeaderTitleContent>
                <S.HeaderImage
                    src="/background-header.jpg"
                    alt="Céu estrelado com um viajante observando"
                />
            </S.HeaderContainer>
            <S.HeaderButtonContent>
                <Button
                    ghost
                    size="large"
                    shape="circle"
                    icon={<DownOutlined />}
                    onClick={() =>
                        window.scrollTo({
                            top: 850,
                            behavior: 'smooth',
                        })
                    }
                />
            </S.HeaderButtonContent>
        </S.HeaderWrapper>
    )
}

export default Header
