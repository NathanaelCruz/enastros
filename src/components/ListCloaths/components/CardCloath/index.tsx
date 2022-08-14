// Component
import { Avatar, Button, Card, Col, Row, Space, Tag } from 'antd'

// Icons
import { KeyOutlined } from '@ant-design/icons'

// Types
import { ICardCloathProps } from './types'

//Utils
import { formatTagNames } from '@/utils/formatTagNames'

// Data
import { typeColorTag } from '@/components/ListCloaths/data'

// Hooks
import { useListCloaths } from '@/components/ListCloaths/hooks'

// Component deep
const { Meta } = Card

const CardCloath = ({ data, icon }: ICardCloathProps) => {
    const {
        cloath_name: cloathName,
        image,
        rank,
        availability,
        rating,
        state,
        status,
    } = data
    const { setIsOpenModal, setCloathCurrency } = useListCloaths()
    const { tag } = typeColorTag

    const isNotAvailable = availability === 'Bloqueada'
    const isBooking = status === 'reservada'

    return (
        <Card
            cover={<img alt={cloathName} src={image} />}
            actions={[
                <Button
                    type="link"
                    icon={<KeyOutlined />}
                    key="modal"
                    disabled={isNotAvailable || isBooking}
                    onClick={() => {
                        if (!isNotAvailable || !isBooking) {
                            setCloathCurrency(data)
                            setIsOpenModal()
                        }
                    }}
                >
                    {isBooking && 'Cloath Reservada'}
                </Button>,
            ]}
        >
            <Meta
                avatar={<Avatar src={icon} alt="Ícone do reino" />}
                title={`${cloathName}, ${rating}`}
                description={
                    <Row>
                        <Space size="large" direction="vertical">
                            <Col span={24}>{`Rank ${rank}`}</Col>
                            <Col span={24}>
                                <Tag color={tag[formatTagNames(availability)]}>
                                    {availability}
                                </Tag>
                                <Tag color={tag[formatTagNames(state)]}>
                                    {state}
                                </Tag>
                            </Col>
                        </Space>
                    </Row>
                }
            />
        </Card>
    )
}

export default CardCloath
