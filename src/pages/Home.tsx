import React from 'react';
import { Col, Dropdown, Layout, MenuProps, Row, Space } from 'antd';
import { UserOutlined, SmileOutlined } from '@ant-design/icons';
import Sider from 'antd/es/layout/Sider';
import { Content, Header } from 'antd/es/layout/layout';
import SideBar from '../layout/SideBar';
import { Outlet, useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: 'Log out',
            onClick: () => {
                navigate('/login');
            },
        },
    ];

    return (
        <Layout>
            <Sider className="h-100vh">
                <SideBar />
            </Sider>
            <Layout>
                <Header className="h-20 bg-main-color text-white leading-header">
                    <Row className="justify-between">
                        <Col>
                            <h1>Header</h1>
                        </Col>

                        <Col>
                            <Dropdown menu={{ items }} placement="bottom">
                                <Space>
                                    <span className="w-6 h-full rounded-full bg-[#B5F5EC] p-2">
                                        <UserOutlined className="text-xl text-black" />
                                    </span>
                                </Space>
                            </Dropdown>
                        </Col>
                    </Row>
                </Header>
                <Content className="m-8">
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default Home;
