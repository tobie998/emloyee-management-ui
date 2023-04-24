import { Space } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import React from 'react';

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    role: string;
    phone: number;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Key',
        key: 'key',
        width: '70px',
        dataIndex: 'key',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: '120px',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: '80px',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Role',
        key: 'role',
        dataIndex: 'role',
        width: '120px',
    },
    {
        title: 'Phone',
        key: 'phone',
        dataIndex: 'phone',
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        role: 'Employee',
        phone: 123456789,
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        role: 'Employee',
        phone: 123456789,
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        role: 'Employee',
        phone: 123456789,
    },
    {
        key: '4',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        role: 'Employee',
        phone: 123456789,
    },
    {
        key: '5',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        role: 'Employee',
        phone: 123456789,
    },
    {
        key: '6',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        role: 'Employee',
        phone: 123456789,
    },
    {
        key: '7',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        role: 'Employee',
        phone: 123456789,
    },
    {
        key: '8',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        role: 'Employee',
        phone: 123456789,
    },
    {
        key: '9',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        role: 'Employee',
        phone: 123456789,
    },
    {
        key: '10',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        role: 'Employee',
        phone: 123456789,
    },
    {
        key: '11',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        role: 'Employee',
        phone: 123456789,
    },
    {
        key: '12',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        role: 'Employee',
        phone: 123456789,
    },
    {
        key: '13',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        role: 'Employee',
        phone: 123456789,
    },
    {
        key: '14',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        role: 'Employee',
        phone: 123456789,
    },
    {
        key: '15',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        role: 'Employee',
        phone: 123456789,
    },
];

const Management_Employees_Details_Table: React.FC = () => {
    return <Table columns={columns} dataSource={data} scroll={{ y: 200 }} />;
};

export default Management_Employees_Details_Table;
