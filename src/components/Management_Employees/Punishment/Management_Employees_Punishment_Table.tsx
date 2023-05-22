import React from 'react';
import { Space } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import { InfoCircleOutlined, EditOutlined } from '@ant-design/icons';

interface DataType {
    key: string;
    punishmentID: string;
    punishmentName: string;
}

interface Props {
    onInfo: any;
    onEdit: any;
    searchedText?: any;
    dataTable: DataType[];
}

const Management_Employees_Punishment_Table: React.FC<Props> = (props: Props) => {
    const { searchedText, dataTable } = props;
    const columns: ColumnsType<DataType> = [
        {
            title: 'STT',
            key: 'key',
            width: '70px',
            dataIndex: 'key',
        },
        {
            title: 'Mã kỷ luật',
            dataIndex: 'punishmentID',
            key: 'punishmentID',
            width: '200px',
        },
        {
            title: 'Tên kỷ luật',
            key: 'punishmentName',
            dataIndex: 'punishmentName',
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
            punishmentID: 'VB00001',
            punishmentName: 'Thạc sĩ',
        },
        {
            key: '2',
            punishmentID: 'VB00001',
            punishmentName: 'Thạc sĩ',
        },
        {
            key: '3',
            punishmentID: 'VB00001',
            punishmentName: 'Thạc sĩ',
        },
        {
            key: '4',
            punishmentID: 'VB00001',
            punishmentName: 'Thạc sĩ',
        },
        {
            key: '5',
            punishmentID: 'VB00001',
            punishmentName: 'Thạc sĩ',
        },
    ];

    return (
        <div>
            <Table columns={columns} dataSource={dataTable} scroll={{ y: 200 }} />;
        </div>
    );
};

export default Management_Employees_Punishment_Table;
