import React from 'react';
import { Space } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import { InfoCircleOutlined, EditOutlined } from '@ant-design/icons';

export interface DataType {
    maCanBo: string;
    maDonVi: string;
    hoTen: string;
    namSinh: string;
    gioiTinh: true;
    hocHam: string;
    hocVi: string;
    namHocHam: number;
    namHocVi: number;
    diaChiNhaRieng: string;
    dienThoaiNhaRieng: string;
    dienThoaiCoQuan: string;
    mobile: string;
    email: string;
    maChucVu: string;
    maChucDanh: string;
    bacLuong: string;
    luongCoBan: 0;
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
            key: 'maCanBo',
            dataIndex: 'maCanBo',
            width: '150px',
        },
        {
            title: 'Họ và tên',
            dataIndex: 'hoTen',
            key: 'hoTen',
            filteredValue: [searchedText],
            onFilter: (value: any, record: any) => {
                return record.hoTen.includes(value);
            },
            width: '150px',
        },
        {
            title: 'Năm sinh',
            dataIndex: 'namSinh',
            key: 'namSinh',
            width: '100px',
        },
        {
            title: 'Giới tính',
            dataIndex: 'gioiTinh',
            key: 'gioiTinh',
            width: '100px',
        },
        {
            title: 'Học hàm',
            key: 'hocHam',
            dataIndex: 'hocHam',
            width: '120px',
        },
        {
            title: 'Học vị',
            key: 'hocVi',
            dataIndex: 'hocVi',
            width: '120px',
        },
        {
            title: 'Địa chỉ nhà riêng',
            key: 'diaChiNhaRieng',
            dataIndex: 'diaChiNhaRieng',
            width: '150px',
        },
        {
            title: 'Điện thoại nhà riêng',
            key: 'dienThoaiNhaRieng',
            dataIndex: 'dienThoaiNhaRieng',
            width: '180px',
        },
        {
            title: 'Điện thoại cơ quan',
            key: 'dienThoaiCoQuan',
            dataIndex: 'dienThoaiCoQuan',
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
            title: 'Chức vụ',
            key: '"maChucVu"',
            dataIndex: '"maChucVu"',
            width: '120px',
        },
        {
            title: 'Chức danh',
            key: '"maChucDanh"',
            dataIndex: '"maChucDanh"',
            width: '200px',
        },
        {
            title: 'Tên đơn vị',
            key: 'maDonVi',
            dataIndex: 'maDonVi',
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

    return <Table columns={columns} dataSource={dataTable} scroll={{ y: 200 }} />
};

export default Management_Employees_Details_Table;
