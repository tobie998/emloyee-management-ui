import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Col, Input, Layout, Row } from 'antd';
import { UserOutlined, LockOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import { login } from '../store/auth/authSlice';

interface UserInfo {
    username: string;
    password: string;
}

const Login: React.FC = () => {
    // const [visible, setVisible] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const selector = useSelector();

    const handleLogin = async () => {
        const userInfo: UserInfo = {
            username,
            password,
        };

        if (userInfo.username && userInfo.password) {
            const res = await dispatch(login({ userInfo, navigate }));
            console.log(res);
        } else {
            window.prompt('Tên đăng nhập hoặc mật khẩu không đúng');
        }
    };

    return (
        <Layout className="h-[100vh] items-center justify-center">
            <Card className="w-2/6 shadow-xl">
                <h3 className="text-main-color">Login</h3>
                <Row className="mb-4">
                    <Col span={24}>
                        <Input
                            size="large"
                            placeholder="Username"
                            onChange={(e: any) => setUsername(e.target.value)}
                            prefix={<UserOutlined className="text-main-color" />}
                        />
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col span={24}>
                        <Input.Password
                            size="large"
                            placeholder="Password"
                            prefix={<LockOutlined className="text-main-color" />}
                            iconRender={(visible: any) =>
                                visible ? (
                                    <EyeTwoTone className="text-main-color" />
                                ) : (
                                    <EyeInvisibleOutlined className="text-main-color" />
                                )
                            }
                            onChange={(e: any) => setPassword(e.target.value)}
                        />
                    </Col>
                </Row>
                <Row className="justify-between items-center">
                    <Col span={8}>
                        <a href="/" className="text-main-color ">
                            Forget your password?
                        </a>
                    </Col>

                    <Col span={6}>
                        <Button className="w-full bg-main-color text-white hover:scale-110" onClick={handleLogin}>
                            Login
                        </Button>
                    </Col>
                </Row>
            </Card>
        </Layout>
    );
};

export default Login;
