import React from 'react';
import { Space } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import { InfoCircleOutlined, EditOutlined } from '@ant-design/icons';

interface DataType {
    key: string;
    awardID: string;
    form: string;
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
            title: 'Mã giải thưởng',
            dataIndex: 'awardID',
            key: 'awardID',
            width: '200px',
        },
        {
            title: 'Hình thức',
            key: 'form',
            dataIndex: 'form',
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
            awardID: 'GT0001',
            form: 'Tiền mặt',
        },
        {
            key: '2',
            awardID: 'GT0002',
            form: 'Tiền mặt',
        },
        {
            key: '3',
            awardID: 'GT0003',
            form: 'Tiền mặt',
        },
        {
            key: '4',
            awardID: 'GT0004',
            form: 'Tiền mặt',
        },
        {
            key: '5',
            awardID: 'GT0005',
            form: 'Tiền mặt',
        },
    ];

    return <Table columns={columns} dataSource={data} scroll={{ y: 200 }} />;
};

export default Management_Employees_Details_Table;
