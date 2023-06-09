import React from 'react';
import { Col, Dropdown, Layout, MenuProps, Row, Space } from 'antd';
import { UserOutlined, SmileOutlined } from '@ant-design/icons';
import Sider from 'antd/es/layout/Sider';
import { Content, Header } from 'antd/es/layout/layout';
import SideBar from '../layout/SideBar';
import { Navigate, Outlet, redirect, useNavigate } from 'react-router-dom';
import ProtectRoute from '../layout/ProtectRoute';

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
        <Layout className="h-full">
            <Sider className="h-100vh overflow-y-auto">
                <div className=" ">
                    <div className="text-center h-16">
                        <img className="h-full" src={require('../assets/img/Logo_MTA_new.png')} alt="mta" />
                    </div>
                    <div className="bg-main-color h-10 w-full"></div>
                </div>
                <div>
                    <SideBar />
                </div>
            </Sider>
            <Layout className="h-100vh">
                <Header className="h-16 bg-main-color text-white">
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
                    <ProtectRoute>
                        <Outlet />
                    </ProtectRoute>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Home;

export const handleHomeLoader = () => {
    const token = sessionStorage.getItem('Token');
    console.log(token);
    if (!token) {
        return redirect('/login');
    } else {
        return null;
    }
};
