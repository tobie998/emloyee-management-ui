import React from 'react';
import { Menu, MenuProps } from 'antd';
import { TeamOutlined, ReadOutlined, DesktopOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const SideBar: React.FC = () => {
    const menuItem: MenuProps['items'] = [
        {
            label: 'Quản lý nhân sự',
            icon: <TeamOutlined className="text-main-color text-base" />,
            key: 1,
            children: [
                { label: <Link to="/employees-detail">Thông tin cán bộ</Link>, key: 11 },
                { label: <Link to="/employees-role">Chức vụ</Link>, key: 12 },
                { label: <Link to="/employees-role-name">Chúc danh</Link>, key: 13 },
                { label: <Link to="/employees-unit">Đơn vị</Link>, key: 14 },
                { label: <Link to="/employees-certificate">Văn bằng</Link>, key: 15 },
                { label: <Link to="/employees-training-process">Quá trình đào tạo</Link>, key: 16 },
                { label: <Link to="/employees-research-experience">Kinh nghiệm KH&CN</Link>, key: 17 },
                { label: <Link to="/employees-research-category">Lĩnh vực nghiên cứu KH</Link>, key: 18 },
                { label: <Link to="/employees-foreign-language">Trình độ ngoại ngữ</Link>, key: 19 },
            ],
        },
        {
            label: 'Quản lý đào tạo',
            icon: <ReadOutlined className="text-main-color" />,
            key: 21,
            children: [{ label: <Link to="/employees/employees-detail">Thông tin cán bộ</Link>, key: 21 }],
        },
        {
            label: 'Quản lý nghiên cứu khoa học',
            icon: <DesktopOutlined className="text-main-color text-base" />,
            key: 3,
            children: [{ label: <Link to="/research-employee">Thông tin cán bộ</Link>, key: 31 }],
        },
    ];

    return (
        <div>
            <div className="text-center h-20">
                <img className="h-full" src={require('../assets/img/Logo_MTA_new.png')} alt="mta" />
            </div>
            <div className="bg-main-color h-10 w-full"></div>
            <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" items={menuItem} />
        </div>
    );
};

export default SideBar;
