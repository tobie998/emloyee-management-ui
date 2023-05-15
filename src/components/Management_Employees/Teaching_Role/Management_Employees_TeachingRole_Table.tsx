import React from 'react';
import { Space } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import { InfoCircleOutlined, EditOutlined } from '@ant-design/icons';

interface DataType {
    key: string;
    teachingRoleID: string;
    teachingRoleName: string;
}

interface Props {
    onInfo: any;
    onEdit: any;
}

const Management_Employees_TeachingRole_Table: React.FC<Props> = (props: Props) => {
    const columns: ColumnsType<DataType> = [
        {
            title: 'STT',
            key: 'key',
            width: '70px',
            dataIndex: 'key',
        },
        {
            title: 'Mã chức danh',
            dataIndex: 'teachingRoleID',
            key: 'teachingRoleID',
            width: '200px',
        },
        {
            title: 'Tên chức danh',
            key: 'teachingRoleName',
            dataIndex: 'teachingRoleName',
            width: '200px',
        },
        {
            title: '',
            key: 'action',
            fixed: 'right',
            width: '40px',
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
            teachingRoleID: 'VB00001',
            teachingRoleName: 'Thạc sĩ',
        },
        {
            key: '2',
            teachingRoleID: 'VB00001',
            teachingRoleName: 'Thạc sĩ',
        },
        {
            key: '3',
            teachingRoleID: 'VB00001',
            teachingRoleName: 'Thạc sĩ',
        },
        {
            key: '4',
            teachingRoleID: 'VB00001',
            teachingRoleName: 'Thạc sĩ',
        },
        {
            key: '5',
            teachingRoleID: 'VB00001',
            teachingRoleName: 'Thạc sĩ',
        },
    ];

    return (
        <div>
            <Table columns={columns} dataSource={data} scroll={{ y: 200 }} />;
        </div>
    );
};

export default Management_Employees_TeachingRole_Table;
