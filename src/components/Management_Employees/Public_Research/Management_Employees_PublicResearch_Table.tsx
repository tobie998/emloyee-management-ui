import React from 'react';
import { Space } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import { InfoCircleOutlined, EditOutlined } from '@ant-design/icons';

interface DataType {
    key: string;
    publicResearchID: string;
    publicResearchForm: string;
}

interface Props {
    onInfo: any;
    onEdit: any;
    searchedText?: any;
    dataTable: DataType[];
}

const Management_Employees_PublicResearch_Table: React.FC<Props> = (props: Props) => {
    const { searchedText, dataTable } = props;
    const columns: ColumnsType<DataType> = [
        {
            title: 'STT',
            key: 'key',
            width: '70px',
            dataIndex: 'key',
        },
        {
            title: 'Mã công trình KH&CN',
            dataIndex: 'publicResearchID',
            key: 'publicResearchID',
            width: '200px',
        },
        {
            title: 'Loại công trình KH&CN',
            key: 'publicResearchForm',
            dataIndex: 'publicResearchForm',
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
            publicResearchID: 'VB00001',
            publicResearchForm: 'Thạc sĩ',
        },
        {
            key: '2',
            publicResearchID: 'VB00001',
            publicResearchForm: 'Thạc sĩ',
        },
        {
            key: '3',
            publicResearchID: 'VB00001',
            publicResearchForm: 'Thạc sĩ',
        },
        {
            key: '4',
            publicResearchID: 'VB00001',
            publicResearchForm: 'Thạc sĩ',
        },
        {
            key: '5',
            publicResearchID: 'VB00001',
            publicResearchForm: 'Thạc sĩ',
        },
    ];

    return (
        <div>
            <Table columns={columns} dataSource={dataTable} scroll={{ y: 200 }} />;
        </div>
    );
};

export default Management_Employees_PublicResearch_Table;
