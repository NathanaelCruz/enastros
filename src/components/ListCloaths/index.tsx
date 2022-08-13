// Components
import { KeyOutlined } from '@ant-design/icons'
import { Tabs, Layout, Row, Col, List, Card, Avatar, Space, Tag } from 'antd'

// Styles
import * as S from './styles'

// Components Deep
const { TabPane } = Tabs
const { Content } = Layout
const { Item } = List
const { Meta } = Card
const data = [
    {
        title: 'Title 1',
        rank: 'A',
    },
    {
        title: 'Title 1',
        rank: 'A',
    },
    {
        title: 'Title 1',
        rank: 'A',
    },
    {
        title: 'Title 1',
        rank: 'A',
    },
]

const ListCloaths = () => {
    return (
        <Layout style={{ backgroundColor: '#fafafa' }}>
            <Content style={{ marginTop: 40 }}>
                <Row>
                    <Col span={20} offset={2}>
                        <Tabs
                            centered
                            defaultActiveKey="kingdom-0"
                            onChange={() => console.log('teste')}
                        >
                            <TabPane tab="Athena" key="kingdom-0">
                                <List
                                    grid={{
                                        gutter: 16,
                                        xs: 1,
                                        sm: 2,
                                        md: 3,
                                        lg: 3,
                                        xl: 3,
                                        xxl: 6,
                                    }}
                                    dataSource={data}
                                    renderItem={(item) => {
                                        const { title, rank } = item
                                        return (
                                            <Item>
                                                <Card
                                                    cover={
                                                        <img
                                                            alt="example"
                                                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                                        />
                                                    }
                                                    actions={[
                                                        <KeyOutlined key="modal" />,
                                                    ]}
                                                >
                                                    <Meta
                                                        avatar={
                                                            <Avatar src="https://joeschmoe.io/api/v1/random" />
                                                        }
                                                        title={title}
                                                        description={
                                                            <Space>
                                                                <Row>
                                                                    <Col
                                                                        span={
                                                                            24
                                                                        }
                                                                    >
                                                                        {`Rank ${rank}`}
                                                                    </Col>
                                                                    <Col
                                                                        span={
                                                                            24
                                                                        }
                                                                    >
                                                                        <Tag color="success">
                                                                            Completa
                                                                        </Tag>
                                                                        <Tag color="success">
                                                                            Disponível
                                                                        </Tag>
                                                                    </Col>
                                                                </Row>
                                                            </Space>
                                                        }
                                                    />
                                                </Card>
                                            </Item>
                                        )
                                    }}
                                />
                            </TabPane>
                            <TabPane tab="Hades" key="kingdom-1"></TabPane>
                        </Tabs>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}

export default ListCloaths
