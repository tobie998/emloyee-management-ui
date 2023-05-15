import React from 'react';
import { Space } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import { InfoCircleOutlined, EditOutlined } from '@ant-design/icons';

interface DataType {
    key: string;
    givenDegreeID: string;
    givenDegreeName: string;
}

interface Props {
    onInfo: any;
    onEdit: any;
}

const Management_Employees_GivenDegree_Table: React.FC<Props> = (props: Props) => {
    const columns: ColumnsType<DataType> = [
        {
            title: 'STT',
            key: 'key',
            width: '70px',
            dataIndex: 'key',
        },
        {
            title: 'Mã văn bằng',
            dataIndex: 'givenDegreeID',
            key: 'givenDegreeID',
            width: '200px',
        },
        {
            title: 'Tên văn bằng',
            key: 'givenDegreeName',
            dataIndex: 'givenDegreeName',
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
            givenDegreeID: 'VB00001',
            givenDegreeName: 'Thạc sĩ',
        },
        {
            key: '2',
            givenDegreeID: 'VB00002',
            givenDegreeName: 'Đại học',
        },
        {
            key: '3',
            givenDegreeID: 'VB00003',
            givenDegreeName: 'Thạc sĩ',
        },
        {
            key: '4',
            givenDegreeID: 'VB00004',
            givenDegreeName: 'Thạc sĩ',
        },
        {
            key: '5',
            givenDegreeID: 'VB00005',
            givenDegreeName: 'Thạc sĩ',
        },
    ];

    return (
        <div>
            <Table columns={columns} dataSource={data} scroll={{ y: 200 }} />;
        </div>
    );
};

export default Management_Employees_GivenDegree_Table;
