import React from 'react';
import { Space } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import { InfoCircleOutlined, EditOutlined } from '@ant-design/icons';

interface DataType {
    key: string;
    maDonVi: string;
    tenDonVi: string;
    diaChi: string;
    fax: number;
    nguoiDungDau: string;
    dienThoai: number;
    website: string;
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
            dataIndex: 'maDonVi',
            key: 'maDonVi',
            width: '200px',
        },
        {
            title: 'Tên đơn vị',
            dataIndex: 'tenDonVi',
            key: 'tenDonVi',
            filteredValue: [searchedText],
            onFilter: (value: any, record: any) => {
                return record.tenDonVi.includes(value);
            },
            width: '200px',
        },
        {
            title: 'Địa chỉ',
            key: 'diaChi',
            dataIndex: 'diaChi',
            width: '200px',
        },
        {
            title: 'Fax',
            key: 'fax',
            dataIndex: 'fax',
            width: '200px',
        },
        {
            title: 'Người đứng đầu',
            key: 'nguoiDungDau',
            dataIndex: 'nguoiDungDau',
            width: '200px',
        },
        {
            title: 'Điện thoại',
            key: 'dienThoai',
            dataIndex: 'dienThoai',
            width: '200px',
        },
        {
            title: 'Website',
            key: 'website',
            dataIndex: 'website',
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

export default Management_Employees_Unit_Table;
