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
                    <S.TitlHeader>έναστρος</S.TitlHeader>
                    <Divider
                        style={{ backgroundColor: '#fafafa', margin: '16px 0' }}
                    />
                    <S.SubtitleHeader>Qual sua constelação?</S.SubtitleHeader>
                </S.HeaderTitleContent>
                <S.HeaderImage src="/background-header.jpg" />
            </S.HeaderContainer>
            <S.HeaderButtonContent>
                <Button
                    type="primary"
                    size="large"
                    shape="circle"
                    icon={<DownOutlined />}
                    onClick={() => console.log(' DOWN')}
                />
            </S.HeaderButtonContent>
        </S.HeaderWrapper>
    )
}

export default Header
