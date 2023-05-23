import React from 'react';
import { Space } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import { InfoCircleOutlined, EditOutlined } from '@ant-design/icons';

interface DataType {
    key: string;
    maBacDaoTao: string;
    bacDaoTao: string;
}

interface Props {
    onInfo: any;
    onEdit: any;
    searchedText?: any;
    dataTable: DataType[];
}

const Management_Employees_TrainingProcess_Table: React.FC<Props> = (props: Props) => {
    const { searchedText, dataTable } = props;
    const columns: ColumnsType<DataType> = [
        {
            title: 'STT',
            key: 'key',
            width: '70px',
            dataIndex: 'key',
        },
        {
            title: 'Mã quá trình đào tạo',
            dataIndex: 'maBacDaoTao',
            key: 'maBacDaoTao',
            width: '200px',
        },
        {
            title: 'Bậc đào tạo',
            key: 'bacDaoTao',
            dataIndex: 'bacDaoTao',
            filteredValue: [searchedText],
            onFilter: (value: any, record: any) => {
                return record.bacDaoTao.includes(value);
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

export default Management_Employees_TrainingProcess_Table;
