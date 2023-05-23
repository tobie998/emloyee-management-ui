import React from 'react';
import { Space } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import { InfoCircleOutlined, EditOutlined } from '@ant-design/icons';

interface DataType {
    key: string;
    machuyennganh: string;
    malinhvuc: string;
    tenchuyennganh: string;
}

interface Props {
    onInfo: any;
    onEdit: any;
    searchedText?: any;
    dataTable: DataType[];
}

const Management_Employees_ResearchMajor_Table: React.FC<Props> = (props: Props) => {
    const { searchedText, dataTable } = props;
    const columns: ColumnsType<DataType> = [
        {
            title: 'STT',
            key: 'key',
            width: '70px',
            dataIndex: 'key',
        },
        {
            title: 'Mã lĩnh vực',
            dataIndex: 'malinhvuc',
            key: 'malinhvuc',
            width: '200px',
        },
        {
            title: 'Mã chuyên ngành',
            dataIndex: 'machuyennganh',
            key: 'machuyennganh',
            width: '200px',
        },
        {
            title: 'Tên chuyên ngành',
            key: 'tenchuyennganh',
            dataIndex: 'tenchuyennganh',
            filteredValue: [searchedText],
            onFilter: (value: any, record: any) => {
                return record.tenchuyennganh.includes(value);
            },
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

    return (
        <div>
            <Table columns={columns} dataSource={dataTable} scroll={{ y: 200 }} />;
        </div>
    );
};

export default Management_Employees_ResearchMajor_Table;
