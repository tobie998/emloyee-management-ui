import React from 'react';
import { Space } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import { InfoCircleOutlined, EditOutlined } from '@ant-design/icons';

interface DataType {
    key: string;
    maGiaiThuong: string;
    hinhThuc: string;
}

interface Props {
    onInfo: any;
    onEdit: any;
    searchedText?: any;
    dataTable: DataType[];
}

const Management_Employees_Details_Table: React.FC<Props> = (props: Props) => {
    const { searchedText, dataTable } = props;
    const columns: ColumnsType<DataType> = [
        {
            title: 'STT',
            key: 'key',
            width: '70px',
            dataIndex: 'key',
        },
        {
            title: 'Mã giải thưởng',
            dataIndex: 'maGiaiThuong',
            key: 'maGiaiThuong',
            width: '200px',
        },
        {
            title: 'Hình thức',
            key: 'hinhThuc',
            dataIndex: 'hinhThuc',
            filteredValue: [searchedText],
            onFilter: (value: any, record: any) => {
                return record.hinhThuc.includes(value);
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

    return <Table columns={columns} dataSource={dataTable} scroll={{ y: 200 }} />;
};

export default Management_Employees_Details_Table;
