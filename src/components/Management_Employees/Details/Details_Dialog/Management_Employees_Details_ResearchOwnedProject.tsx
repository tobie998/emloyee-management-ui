import { Card, Col, Row, Space, Table } from 'antd';
import React, { useState } from 'react';
import Button_Normal from '../../../common/Button_Normal';
import Button_Reset from '../../../common/Button_Reset';
import Button_Add from '../../../common/Button_Add';
import { SearchOutlined } from '@ant-design/icons';
import Search from 'antd/es/input/Search';
import { ColumnsType } from 'antd/es/table';
import { InfoCircleOutlined, EditOutlined } from '@ant-design/icons';
import Input_Select from '../../../common/Input_Select';
import { researchCategoryList } from '../../../../constant/dummy';
import Input_Text from '../../../common/Input_Text';
import Input_DatePicker from '../../../common/Input_DatePicker';
import Dialog_Warning from '../../../common/Dialog_Warning';

interface DataType {
    key: number;
    employeeID: string;
    researchOwnedProjectID: string;
    researchOwnedProjectName: string;
    startTime: string;
    endTime: string;
    status: string;
}

interface Props {
    onCancel: any;
    onClickOk: any;
    dialogTitle: string;
}

interface childInputProps {
    mode: string;
    onClickCancel: any;
    onClickOk: any;
    childInputItem: any;
}

const ResearchOwnedProject_ChildInput: React.FC<childInputProps> = (props: childInputProps) => {
    const { mode, childInputItem } = props;
    console.log(childInputItem);
    const [isOpenWarningDialog, setIsOpenWarningDialog] = useState(false);
    const [researchCategory, setResearchCategory] = useState('');

    const handleDelete = () => {
        console.log('delete');
        setIsOpenWarningDialog(true);
    };

    const handleCancel = () => {
        console.log('cancel');
        props.onClickCancel();
    };

    const handleValidate = () => {
        console.log('validate');
        setIsOpenWarningDialog(true);
    };

    return (
        <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center z-50 ">
            <Card
                title={`Đề tài dự án KH&CN chủ trì [${mode}]`}
                headStyle={{ background: '#006D75', color: 'white' }}
                style={{ background: '#fff', width: '100%', height: 'fit-content', border: 'none' }}
                className="shadow-xl"
                actions={[
                    <Row key="action" className="px-6">
                        <Col span={3}>
                            <Button_Normal label="Xóa" btnColor="#ef4444" onClick={handleDelete}></Button_Normal>
                        </Col>

                        <Col span={10} offset={11}>
                            <Row justify="space-between">
                                <Col span={11}>
                                    <Button_Normal
                                        label="Hủy"
                                        btnColor="#bfbfbf"
                                        textColor="#006d75"
                                        onClick={handleCancel}
                                    ></Button_Normal>
                                </Col>

                                <Col span={11}>
                                    <Button_Normal label="Thêm mới" onClick={handleValidate}></Button_Normal>
                                </Col>
                            </Row>
                        </Col>
                    </Row>,
                ]}
            >
                <Row gutter={[32, 32]} className="mb-5">
                    <Col span={8}>
                        <Input_Text
                            label="Mã cán bộ"
                            value={`employeeName`}
                            onChange={() => {
                                console.log('abcd');
                            }}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={8}>
                        <Input_Select
                            label="Mã đề tài"
                            onChange={(value: string) => {
                                console.log(value);
                                setResearchCategory(value);
                            }}
                            onBlur={() => console.log('onBlur')}
                            options={researchCategoryList}
                        />
                    </Col>

                    <Col span={8}>
                        <Input_Text
                            label="Tên đề tài"
                            value={`employeeName`}
                            onChange={() => {
                                console.log('abcd');
                            }}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={8}>
                        <Input_DatePicker
                            label="Thời gian bắt đầu"
                            onChange={(date: any, dateString: any) => console.log(date, dateString)}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={8}>
                        <Input_DatePicker
                            label="Thời gian kết thúc"
                            onChange={(date: any, dateString: any) => console.log(date, dateString)}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={8}>
                        <Input_Text
                            label="Tình trạng"
                            value={`employeeName`}
                            onChange={() => {
                                console.log('abcd');
                            }}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>
                </Row>

                {isOpenWarningDialog ? (
                    <Dialog_Warning
                        messageContent="Bạn muốn thêm mới?"
                        onCancel={() => setIsOpenWarningDialog(false)}
                        onClickOk={() => {
                            setIsOpenWarningDialog(false);
                            props.onClickOk();
                        }}
                    />
                ) : (
                    ''
                )}
            </Card>
        </div>
    );
};

const Management_Employees_Details_ResearchOwnedProject: React.FC<Props> = (props: Props) => {
    const { dialogTitle } = props;
    const [isOpenChildInput, setIsOpenChildInput] = useState(false);
    const [childInputItem, setChildInputItem] = useState({});

    const columns: ColumnsType<DataType> = [
        {
            title: 'STT',
            key: 'key',
            width: '70px',
            dataIndex: 'key',
        },
        {
            title: 'Mã Cán Bộ',
            dataIndex: 'employeeID',
            key: 'employeeID',
            width: '120px',
        },
        {
            title: 'Mã đề tài KH&CN chủ trì',
            dataIndex: 'researchOwnedProjectID',
            key: 'researchOwnedProjectID',
            width: '150px',
        },
        {
            title: 'Tên đề tài KH&CN',
            key: 'researchOwnedProjectName',
            dataIndex: 'researchOwnedProjectName',
            width: '100px',
        },
        {
            title: 'Thời gian bắt đầu',
            key: 'startTime',
            dataIndex: 'startTime',
            width: '150px',
        },
        {
            title: 'Thời gian kết thúc',
            key: 'endTime',
            dataIndex: 'endTime',
            width: '150px',
        },
        {
            title: 'Tình trạng',
            key: 'status',
            dataIndex: 'status',
            width: '150px',
        },
        {
            title: '',
            key: 'action',
            fixed: 'right',
            width: '80px',
            render: (_, record) => (
                <Space size="middle">
                    <InfoCircleOutlined
                        className="text-main-color text-xl"
                        onClick={() => {
                            setIsOpenChildInput(true);
                            setChildInputItem(record);
                        }}
                    />
                    <EditOutlined
                        className="text-main-color text-xl"
                        onClick={() => {
                            setIsOpenChildInput(true);
                            setChildInputItem(record);
                        }}
                    />
                </Space>
            ),
        },
    ];

    const data: DataType[] = [
        {
            key: 1,
            employeeID: 'CB0001',
            researchOwnedProjectID: 'DTTG0001',
            researchOwnedProjectName: 'Đề tài tham gia 1',
            startTime: '2023-05-01',
            endTime: '2023-05-08',
            status: 'Hoàn thành',
        },
        {
            key: 2,
            employeeID: 'CB0002',
            researchOwnedProjectID: 'DTTG0001',
            researchOwnedProjectName: 'Đề tài tham gia 1',
            startTime: '2023-05-01',
            endTime: '2023-05-08',
            status: 'Hoàn thành',
        },
        {
            key: 3,
            employeeID: 'CB0003',
            researchOwnedProjectID: 'DTTG0001',
            researchOwnedProjectName: 'Đề tài tham gia 1',
            startTime: '2023-05-01',
            endTime: '2023-05-08',
            status: 'Hoàn thành',
        },
        {
            key: 4,
            employeeID: 'CB0004',
            researchOwnedProjectID: 'DTTG0001',
            researchOwnedProjectName: 'Đề tài tham gia 1',
            startTime: '2023-05-01',
            endTime: '2023-05-08',
            status: 'Hoàn thành',
        },
        {
            key: 5,
            employeeID: 'CB0005',
            researchOwnedProjectID: 'DTTG0001',
            researchOwnedProjectName: 'Đề tài tham gia 1',
            startTime: '2023-05-01',
            endTime: '2023-05-08',
            status: 'Hoàn thành',
        },
    ];

    const handleReset = () => {
        console.log('reset');
    };

    const handleAdd = () => {
        console.log('clear');
        setIsOpenChildInput(true);
    };

    const onSearch = (value: string) => console.log(value);
    return (
        <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center z-50 ">
            <Card
                title={dialogTitle}
                headStyle={{ background: '#006D75', color: 'white' }}
                style={{ background: '#fff', width: '50%', height: 'fit-content', border: 'none' }}
                className="shadow-xl"
                actions={[
                    <Row key="action" className="px-6">
                        <Col span={6} offset={18}>
                            <Row justify="space-between">
                                <Col span={11}>
                                    <Button_Normal
                                        label="Hủy"
                                        btnColor="#bfbfbf"
                                        textColor="#006d75"
                                        onClick={props.onCancel}
                                    ></Button_Normal>
                                </Col>

                                <Col span={11}>
                                    <Button_Normal label="OK" onClick={props.onClickOk}></Button_Normal>
                                </Col>
                            </Row>
                        </Col>
                    </Row>,
                ]}
            >
                <Row justify="space-between" className="mb-5">
                    <Col span={2}>
                        <Button_Reset onClick={handleReset} />
                    </Col>
                </Row>

                <Row className="justify-between items-center mb-10">
                    <Col span={16}>
                        <Search
                            placeholder="search input"
                            onSearch={onSearch}
                            suffix={<SearchOutlined className="text-lg" />}
                            className="w-full"
                        />
                    </Col>

                    <Col span={2}>
                        <Button_Add onClick={handleAdd} />
                    </Col>
                </Row>

                <Row>
                    <Col span={24}>
                        <Table columns={columns} dataSource={data} scroll={{ y: 100 }} size="small" />;
                    </Col>
                </Row>

                {isOpenChildInput ? (
                    <ResearchOwnedProject_ChildInput
                        mode="add"
                        childInputItem={childInputItem}
                        onClickCancel={() => {
                            setIsOpenChildInput(false);
                        }}
                        onClickOk={() => {
                            setIsOpenChildInput(false);
                        }}
                    />
                ) : (
                    ''
                )}
            </Card>
        </div>
    );
};

export default Management_Employees_Details_ResearchOwnedProject;
