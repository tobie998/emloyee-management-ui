import React from 'react';
import { Space } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import { InfoCircleOutlined, EditOutlined } from '@ant-design/icons';

interface DataType {
    key: string;
    researchProjectID: string;
    researchProjectName: string;
}

interface Props {
    onInfo: any;
    onEdit: any;
}

const Management_Employees_ResearchProject_Table: React.FC<Props> = (props: Props) => {
    const columns: ColumnsType<DataType> = [
        {
            title: 'STT',
            key: 'key',
            width: '70px',
            dataIndex: 'key',
        },
        {
            title: 'Mã đề tài',
            dataIndex: 'researchProjectID',
            key: 'researchProjectID',
            width: '200px',
        },
        {
            title: 'Tên đề tài',
            key: 'researchProjectName',
            dataIndex: 'researchProjectName',
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
            researchProjectID: 'VB00001',
            researchProjectName: 'Thạc sĩ',
        },
        {
            key: '2',
            researchProjectID: 'VB00001',
            researchProjectName: 'Thạc sĩ',
        },
        {
            key: '3',
            researchProjectID: 'VB00001',
            researchProjectName: 'Thạc sĩ',
        },
        {
            key: '4',
            researchProjectID: 'VB00001',
            researchProjectName: 'Thạc sĩ',
        },
        {
            key: '5',
            researchProjectID: 'VB00001',
            researchProjectName: 'Thạc sĩ',
        },
    ];

    return (
        <div>
            <Table columns={columns} dataSource={data} scroll={{ y: 200 }} />;
        </div>
    );
};

export default Management_Employees_ResearchProject_Table;
