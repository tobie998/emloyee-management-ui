import React from 'react';
import { Space } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import { InfoCircleOutlined, EditOutlined } from '@ant-design/icons';

interface DataType {
    key: string;
    researchAssessmentID: string;
    researchAssessmentName: string;
}

interface Props {
    onInfo: any;
    onEdit: any;
}

const Management_Employees_ResearchAssessment_Table: React.FC<Props> = (props: Props) => {
    const columns: ColumnsType<DataType> = [
        {
            title: 'STT',
            key: 'key',
            width: '70px',
            dataIndex: 'key',
        },
        {
            title: 'Mã hình thức hội đồng',
            dataIndex: 'researchAssessmentID',
            key: 'researchAssessmentID',
            width: '200px',
        },
        {
            title: 'Hình thức hội đồng',
            key: 'researchAssessmentName',
            dataIndex: 'researchAssessmentName',
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
            researchAssessmentID: 'VB00001',
            researchAssessmentName: 'Thạc sĩ',
        },
        {
            key: '2',
            researchAssessmentID: 'VB00001',
            researchAssessmentName: 'Thạc sĩ',
        },
        {
            key: '3',
            researchAssessmentID: 'VB00001',
            researchAssessmentName: 'Thạc sĩ',
        },
        {
            key: '4',
            researchAssessmentID: 'VB00001',
            researchAssessmentName: 'Thạc sĩ',
        },
        {
            key: '5',
            researchAssessmentID: 'VB00001',
            researchAssessmentName: 'Thạc sĩ',
        },
    ];

    return (
        <div>
            <Table columns={columns} dataSource={data} scroll={{ y: 200 }} />;
        </div>
    );
};

export default Management_Employees_ResearchAssessment_Table;
