// Components
import {
    Tabs,
    Layout,
    Row,
    Col,
    List,
    Modal,
    Image,
    Avatar,
    Space,
    Typography,
    Tag,
    Tooltip,
} from 'antd'
import CardCloath from './components/CardCloath'

// Data
import { typeColorTag } from './data'

// Utils
import { formatTagNames } from '@/utils/formatTagNames'

// Hooks
import { useListCloaths } from './hooks'

// Styles
import * as S from './styles'

// Icons
import { QuestionCircleFilled } from '@ant-design/icons'

// Components Deep
const { TabPane } = Tabs
const { Content } = Layout
const { Item } = List
const { Title, Text } = Typography

const ListCloaths = () => {
    const {
        gridList,
        realms,
        currencyCloaths,
        currencyRealm,
        cloathCurrency,
        isOpenModal,
        currencyRealmIcon,
        setIsOpenModal,
        setCurrencyRealm,
        handlerBookingCloath,
        loadingCloaths,
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
        <Layout style={S.LayoutStyle}>
            <Content style={S.ContentLayoutStyle}>
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
                            <Image
                                src={image}
                                alt="Imagem da armadura selecionada"
                            />
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
                                    <Space
                                        size="large"
                                        style={S.marginTopContent}
                                    >
                                        <Tag
                                            color={
                                                tag[
                                                    formatTagNames(availability)
                                                ]
                                            }
                                        >
                                            {availability}
                                        </Tag>
                                        <Tag color={tag[formatTagNames(state)]}>
                                            {state}
                                        </Tag>
                                    </Space>
                                </Col>
                                {lost_pieces && (
                                    <Col span={24}>
                                        <Space
                                            size="middle"
                                            style={S.marginTopContent}
                                        >
                                            <Tooltip title="Partes da cloath que estão perdidas no mundo de Apogeu">
                                                <QuestionCircleFilled />
                                            </Tooltip>
                                            <Text strong={true}>
                                                Partes perdidas:{' '}
                                            </Text>
                                            <Text type="warning">
                                                {lost_pieces}
                                            </Text>
                                        </Space>
                                    </Col>
                                )}
                                {particularity && (
                                    <Col span={24}>
                                        <Space
                                            size="middle"
                                            style={S.marginTopContent}
                                        >
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
                <Row>
                    <Col span={20} offset={2}>
                        <Tabs
                            centered
                            defaultActiveKey={currencyRealm}
                            onChange={(realm) => setCurrencyRealm(realm)}
                        >
                            {realms.map((realm) => {
                                const { friendly_name, name, icon } = realm
                                return (
                                    <TabPane tab={friendly_name} key={name}>
                                        <List
                                            grid={gridList}
                                            style={S.marginBottomContent}
                                            loading={
                                                currencyCloaths.length < 1 ||
                                                loadingCloaths
                                            }
                                            dataSource={currencyCloaths}
                                            pagination={{
                                                total: currencyCloaths.length,
                                                pageSize: 10,
                                                pageSizeOptions: [10, 20, 30],
                                                showSizeChanger: true,
                                                showQuickJumper: true,
                                                showTotal: (total) =>
                                                    `Total ${total} items`,
                                            }}
                                            renderItem={(item) => {
                                                return (
                                                    <Item>
                                                        <CardCloath
                                                            data={item}
                                                            icon={icon}
                                                        />
                                                    </Item>
                                                )
                                            }}
                                        />
                                    </TabPane>
                                )
                            })}
                        </Tabs>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}

export default ListCloaths
