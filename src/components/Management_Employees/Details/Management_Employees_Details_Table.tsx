import React from 'react';
import { Space } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import { InfoCircleOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

interface DataType {
    key: string;
    name: string;
    age: number;
    sex: string;
    academicRank: string;
    degree: string;
    workingRole: string;
    currentRole: string;
    personalAddress: string;
    personalPhone: string;
    officialPhone: string;
    mobile: string;
    unit: string;
}

interface Props {
    onInfo: any;
    onEdit: any;
}

const Management_Employees_Details_Table: React.FC<Props> = (props: Props) => {
    const columns: ColumnsType<DataType> = [
        {
            title: 'STT',
            key: 'key',
            width: '70px',
            dataIndex: 'key',
        },
        {
            title: 'Họ và tên',
            dataIndex: 'name',
            key: 'name',
            width: '120px',
        },
        {
            title: 'Năm sinh',
            dataIndex: 'age',
            key: 'age',
            width: '100px',
        },
        {
            title: 'Giới tính',
            dataIndex: 'sex',
            key: 'sex',
            width: '100px',
        },
        {
            title: 'Học hàm',
            key: 'academicRank',
            dataIndex: 'academicRank',
            width: '120px',
        },
        {
            title: 'Học vị',
            key: 'degree',
            dataIndex: 'degree',
            width: '120px',
        },
        {
            title: 'Chức danh giảng dạy/nghiên cứu',
            key: 'workingRole',
            dataIndex: 'workingRole',
            width: '250px',
        },
        {
            title: 'Địa chỉ nhà riêng',
            key: 'personalAddress',
            dataIndex: 'personalAddress',
            width: '150px',
        },
        {
            title: 'Điện thoại nhà riêng',
            key: 'personalPhone',
            dataIndex: 'personalPhone',
            width: '180px',
        },
        {
            title: 'Điện thoại cơ quan',
            key: 'officialPhone',
            dataIndex: 'officialPhone',
            width: '180px',
        },
        {
            title: 'Mobile',
            key: 'mobile',
            dataIndex: 'mobile',
            width: '120px',
        },
        {
            title: 'Tên đơn vị',
            key: 'unit',
            dataIndex: 'unit',
            width: '100px',
        },
        {
            title: '',
            key: 'action',
            fixed: 'right',
            width: '100px',
            render: (_, record) => (
                <Space size="middle">
                    <InfoCircleOutlined className="text-main-color text-2xl" onClick={() => props.onInfo(record)} />
                    <EditOutlined className="text-main-color text-2xl" onClick={() => props.onEdit(record)} />
                </Space>
            ),
        },
    ];

    const data: DataType[] = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            sex: 'Nam',
            academicRank: 'Phó giáo sư',
            degree: 'Tiến sĩ',
            workingRole: 'GVC',
            currentRole: 'Giảng viên',
            personalAddress: 'Hà Nội',
            personalPhone: '123456',
            officialPhone: '1234567',
            mobile: '0358482888',
            unit: 'Đơn vị 1',
        },
        {
            key: '2',
            name: 'John Brown',
            age: 32,
            sex: 'Nam',
            academicRank: 'Phó giáo sư',
            degree: 'Tiến sĩ',
            workingRole: 'GVC',
            currentRole: 'Giảng viên',
            personalAddress: 'Hà Nội',
            personalPhone: '123456',
            officialPhone: '1234567',
            mobile: '0358482888',
            unit: 'Đơn vị 1',
        },
        {
            key: '3',
            name: 'John Brown',
            age: 32,
            sex: 'Nam',
            academicRank: 'Phó giáo sư',
            degree: 'Tiến sĩ',
            workingRole: 'GVC',
            currentRole: 'Giảng viên',
            personalAddress: 'Hà Nội',
            personalPhone: '123456',
            officialPhone: '1234567',
            mobile: '0358482888',
            unit: 'Đơn vị 1',
        },
        {
            key: '4',
            name: 'John Brown',
            age: 32,
            sex: 'Nam',
            academicRank: 'Phó giáo sư',
            degree: 'Tiến sĩ',
            workingRole: 'GVC',
            currentRole: 'Giảng viên',
            personalAddress: 'Hà Nội',
            personalPhone: '123456',
            officialPhone: '1234567',
            mobile: '0358482888',
            unit: 'Đơn vị 1',
        },
        {
            key: '5',
            name: 'John Brown',
            age: 32,
            sex: 'Nam',
            academicRank: 'Phó giáo sư',
            degree: 'Tiến sĩ',
            workingRole: 'GVC',
            currentRole: 'Giảng viên',
            personalAddress: 'Hà Nội',
            personalPhone: '123456',
            officialPhone: '1234567',
            mobile: '0358482888',
            unit: 'Đơn vị 1',
        },
    ];

    return <Table columns={columns} dataSource={data} scroll={{ y: 200 }} />;
};

export default Management_Employees_Details_Table;
