import React from 'react';
import { Space } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import { InfoCircleOutlined, EditOutlined } from '@ant-design/icons';

export interface DataType {
    key: string;
    macanbo: string;
    hoten: string;
    namsinh: number;
    gioitinh: string;
    hocham: string;
    hocvi: string;
    namhocvi: string;
    namhocham: string;
    diachinharieng: string;
    dienthoainharieng: string;
    dienthoaicoquan: string;
    mobile: string;
    email: string;
    madonvi: string;
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
            title: 'Mã cán bộ',
            key: 'macanbo',
            dataIndex: 'macanbo',
            width: '150px',
        },
        {
            title: 'Họ và tên',
            dataIndex: 'hoten',
            key: 'hoten',
            filteredValue: [searchedText],
            onFilter: (value: any, record: any) => {
                return record.hoten.includes(value);
            },
            width: '150px',
        },
        {
            title: 'Năm sinh',
            dataIndex: 'namsinh',
            key: 'namsinh',
            width: '100px',
        },
        {
            title: 'Giới tính',
            dataIndex: 'gioitinh',
            key: 'gioitinh',
            width: '100px',
        },
        {
            title: 'Học hàm',
            key: 'hocham',
            dataIndex: 'hocham',
            width: '120px',
        },
        {
            title: 'Học vị',
            key: 'hocvi',
            dataIndex: 'hocvi',
            width: '120px',
        },
        {
            title: 'Địa chỉ nhà riêng',
            key: 'diachinharieng',
            dataIndex: 'diachinharieng',
            width: '150px',
        },
        {
            title: 'Điện thoại nhà riêng',
            key: 'dienthoainharieng',
            dataIndex: 'dienthoainharieng',
            width: '180px',
        },
        {
            title: 'Điện thoại cơ quan',
            key: 'dienthoaicoquan',
            dataIndex: 'dienthoaicoquan',
            width: '180px',
        },
        {
            title: 'Mobile',
            key: 'mobile',
            dataIndex: 'mobile',
            width: '120px',
        },
        {
            title: 'Email',
            key: 'email',
            dataIndex: 'email',
            width: '200px',
        },
        {
            title: 'Tên đơn vị',
            key: 'madonvi',
            dataIndex: 'madonvi',
            width: '100px',
        },
        {
            title: '',
            key: 'action',
            fixed: 'right',
            width: '100px',
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
