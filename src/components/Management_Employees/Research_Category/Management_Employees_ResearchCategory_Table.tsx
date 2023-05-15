import React from 'react';
import { Space } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import { InfoCircleOutlined, EditOutlined } from '@ant-design/icons';

interface DataType {
    key: string;
    researchCategoryID: string;
    researchCategoryName: string;
}

interface Props {
    onInfo: any;
    onEdit: any;
}

const Management_Employees_ResearchCategory_Table: React.FC<Props> = (props: Props) => {
    const columns: ColumnsType<DataType> = [
        {
            title: 'STT',
            key: 'key',
            width: '70px',
            dataIndex: 'key',
        },
        {
            title: 'Mã lĩnh vực',
            dataIndex: 'researchCategoryID',
            key: 'researchCategoryID',
            width: '200px',
        },
        {
            title: 'Tên lĩnh vực',
            key: 'researchCategoryName',
            dataIndex: 'researchCategoryName',
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
            researchCategoryID: 'VB00001',
            researchCategoryName: 'Thạc sĩ',
        },
        {
            key: '2',
            researchCategoryID: 'VB00001',
            researchCategoryName: 'Thạc sĩ',
        },
        {
            key: '3',
            researchCategoryID: 'VB00001',
            researchCategoryName: 'Thạc sĩ',
        },
        {
            key: '4',
            researchCategoryID: 'VB00001',
            researchCategoryName: 'Thạc sĩ',
        },
        {
            key: '5',
            researchCategoryID: 'VB00001',
            researchCategoryName: 'Thạc sĩ',
        },
    ];

    return (
        <div>
            <Table columns={columns} dataSource={data} scroll={{ y: 200 }} />;
        </div>
    );
};

export default Management_Employees_ResearchCategory_Table;
