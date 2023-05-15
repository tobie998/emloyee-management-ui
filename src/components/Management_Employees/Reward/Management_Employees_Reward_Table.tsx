import React from 'react';
import { Space } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import { InfoCircleOutlined, EditOutlined } from '@ant-design/icons';

interface DataType {
    key: string;
    rewardID: string;
    rewardName: string;
}

interface Props {
    onInfo: any;
    onEdit: any;
}

const Management_Employees_Reward_Table: React.FC<Props> = (props: Props) => {
    const columns: ColumnsType<DataType> = [
        {
            title: 'STT',
            key: 'key',
            width: '70px',
            dataIndex: 'key',
        },
        {
            title: 'Mã khen thưởng',
            dataIndex: 'rewardID',
            key: 'rewardID',
            width: '200px',
        },
        {
            title: 'Tên khen thưởng',
            key: 'rewardName',
            dataIndex: 'rewardName',
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
            rewardID: 'VB00001',
            rewardName: 'Thạc sĩ',
        },
        {
            key: '2',
            rewardID: 'VB00001',
            rewardName: 'Thạc sĩ',
        },
        {
            key: '3',
            rewardID: 'VB00001',
            rewardName: 'Thạc sĩ',
        },
        {
            key: '4',
            rewardID: 'VB00001',
            rewardName: 'Thạc sĩ',
        },
        {
            key: '5',
            rewardID: 'VB00001',
            rewardName: 'Thạc sĩ',
        },
    ];

    return (
        <div>
            <Table columns={columns} dataSource={data} scroll={{ y: 200 }} />;
        </div>
    );
};

export default Management_Employees_Reward_Table;
