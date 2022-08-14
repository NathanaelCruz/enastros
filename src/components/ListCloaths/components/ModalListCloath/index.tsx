// Components
import {
    Avatar,
    Col,
    Image,
    Modal,
    Row,
    Space,
    Tag,
    Tooltip,
    Typography,
} from 'antd'

// Componentes Deep
const { Text, Title } = Typography

// Icons
import { QuestionCircleFilled } from '@ant-design/icons'

// Hooks
import { useListCloaths } from '../../hooks'

// Data
import { typeColorTag } from '../../data'

//Utils
import { formatTagNames } from '@/utils/formatTagNames'

// Styles
import * as S from './styles'

const ModalListCloath = () => {
    const {
        currencyRealm,
        cloathCurrency,
        isOpenModal,
        currencyRealmIcon,
        setIsOpenModal,
        handlerBookingCloath,
    } = useListCloaths()

    const {
        cloath_name,
        image,
        rating,
        rank,
        availability,
        state,
        lost_pieces,
        particularity,
    } = cloathCurrency

    const { tag } = typeColorTag

    return (
        <Modal
            width={700}
            title={cloath_name}
            visible={isOpenModal}
            onCancel={() => setIsOpenModal()}
            okText="Reservar"
            onOk={handlerBookingCloath}
        >
            <Row>
                <Col span={8}>
                    <Image src={image} alt="Imagem da armadura selecionada" />
                </Col>
                <Col span={15} offset={1}>
                    <Row>
                        <Col span={24}>
                            <Space size="large">
                                <Avatar
                                    src={currencyRealmIcon}
                                    alt="Icone do reino"
                                />
                                <Text>{`Reino de ${currencyRealm}`}</Text>
                            </Space>
                        </Col>
                        <Col span={24}>
                            <Title
                                level={4}
                            >{`${rating} de ${cloath_name}`}</Title>
                        </Col>
                        <Col span={24}>
                            <Text>{`Rank ${rank}`}</Text>
                        </Col>
                        <Col span={24}>
                            <Space size="large" style={S.marginTopContent}>
                                <Tag color={tag[formatTagNames(availability)]}>
                                    {availability}
                                </Tag>
                                <Tag color={tag[formatTagNames(state)]}>
                                    {state}
                                </Tag>
                            </Space>
                        </Col>
                        {lost_pieces && (
                            <Col span={24}>
                                <Space size="middle" style={S.marginTopContent}>
                                    <Tooltip title="Partes da cloath que estão perdidas no mundo de Apogeu">
                                        <QuestionCircleFilled />
                                    </Tooltip>
                                    <Text strong={true}>Partes perdidas: </Text>
                                    <Text type="warning">{lost_pieces}</Text>
                                </Space>
                            </Col>
                        )}
                        {particularity && (
                            <Col span={24}>
                                <Space size="middle" style={S.marginTopContent}>
                                    <Tooltip title="Partes da cloath selecionada que pode ser utilizada">
                                        <QuestionCircleFilled />
                                    </Tooltip>
                                    <Text strong={true}>
                                        Particularidades:{' '}
                                    </Text>
                                    <Text type="secondary">
                                        {particularity}
                                    </Text>
                                </Space>
                            </Col>
                        )}
                    </Row>
                </Col>
            </Row>
        </Modal>
    )
}

export default ModalListCloath
