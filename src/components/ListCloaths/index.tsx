// Components
import { Tabs, Layout, Row, Col, List } from 'antd'
import CardCloath from './components/CardCloath'

// Hooks
import { useListCloaths } from './hooks'

// Styles
import * as S from './styles'

// Icons
import ModalListCloath from './components/ModalListCloath'

// Components Deep
const { TabPane } = Tabs
const { Content } = Layout
const { Item } = List

const ListCloaths = () => {
    const {
        gridList,
        realms,
        currencyCloaths,
        currencyRealm,
        setCurrencyRealm,
        loadingCloaths,
    } = useListCloaths()

    return (
        <Layout style={S.LayoutStyle}>
            <Content style={S.ContentLayoutStyle}>
                <ModalListCloath />
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
