import React from 'react';
import { Space } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import { InfoCircleOutlined, EditOutlined } from '@ant-design/icons';

interface DataType {
    key: string;
    unitID: string;
    unitName: string;
    unitAddress: string;
    unitFax: number;
    unitLeader: string;
    unitPhone: number;
    unitWebsite: string;
}

interface Props {
    onInfo: any;
    onEdit: any;
    searchedText?: any;
    dataTable: DataType[];
}

const Management_Employees_Unit_Table: React.FC<Props> = (props: Props) => {
    const { searchedText, dataTable } = props;
    const columns: ColumnsType<DataType> = [
        {
            title: 'STT',
            key: 'key',
            width: '70px',
            dataIndex: 'key',
        },
        {
            title: 'Mã đơn vị',
            dataIndex: 'unitID',
            key: 'unitID',
            width: '200px',
        },
        {
            title: 'Địa chỉ',
            key: 'unitAddress',
            dataIndex: 'unitAddress',
            width: '200px',
        },
        {
            title: 'Fax',
            key: 'unitFax',
            dataIndex: 'unitFax',
            width: '200px',
        },
        {
            title: 'Người đứng đầu',
            key: 'unitLeader',
            dataIndex: 'unitLeader',
            width: '200px',
        },
        {
            title: 'Điện thoại',
            key: 'unitPhone',
            dataIndex: 'unitPhone',
            width: '200px',
        },
        {
            title: 'Website',
            key: 'unitWebsite',
            dataIndex: 'unitWebsite',
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
            unitID: 'VB00001',
            unitName: 'Thạc sĩ',
            unitAddress: 'string',
            unitFax: 123,
            unitLeader: 'string',
            unitPhone: 123,
            unitWebsite: 'string',
        },
        {
            key: '2',
            unitID: 'VB00001',
            unitName: 'Thạc sĩ',
            unitAddress: 'string',
            unitFax: 123,
            unitLeader: 'string',
            unitPhone: 123,
            unitWebsite: 'string',
        },
        {
            key: '3',
            unitID: 'VB00001',
            unitName: 'Thạc sĩ',
            unitAddress: 'string',
            unitFax: 123,
            unitLeader: 'string',
            unitPhone: 123,
            unitWebsite: 'string',
        },
        {
            key: '4',
            unitID: 'VB00001',
            unitName: 'Thạc sĩ',
            unitAddress: 'string',
            unitFax: 123,
            unitLeader: 'string',
            unitPhone: 123,
            unitWebsite: 'string',
        },
        {
            key: '5',
            unitID: 'VB00001',
            unitName: 'Thạc sĩ',
            unitAddress: 'string',
            unitFax: 123,
            unitLeader: 'string',
            unitPhone: 123,
            unitWebsite: 'string',
        },
    ];

    return (
        <div>
            <Table columns={columns} dataSource={dataTable} scroll={{ y: 200 }} />;
        </div>
    );
};

export default Management_Employees_Unit_Table;
