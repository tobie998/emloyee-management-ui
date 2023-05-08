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
    workingProcessID: string;
    period: string;
    workingPosition: string;
    major: string;
    office: string;
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

const WorkingProcess_ChildInput: React.FC<childInputProps> = (props: childInputProps) => {
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
                title={`Quá trình công tác [${mode}]`}
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
                        <Input_Text
                            label="Mã quá trình công tác"
                            value={`employeeName`}
                            onChange={() => {
                                console.log('abcd');
                            }}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={8}>
                        <Input_DatePicker
                            label="Thời gian"
                            onChange={(date: any, dateString: any) => console.log(date, dateString)}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={8}>
                        <Input_Text
                            label="Vị trí công tác"
                            value={`employeeName`}
                            onChange={() => {
                                console.log('abcd');
                            }}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={8}>
                        <Input_Text
                            label="Lĩnh vực chuyên môn"
                            value={`employeeName`}
                            onChange={() => {
                                console.log('abcd');
                            }}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={8}>
                        <Input_Text
                            label="Cơ quan công tác"
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

const Management_Employees_Details_WorkingProcess: React.FC<Props> = (props: Props) => {
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
            title: 'Mã quá trình công tác',
            dataIndex: 'workingProcessID',
            key: 'workingProcessID',
            width: '150px',
        },
        {
            title: 'Thời gian',
            key: 'period',
            dataIndex: 'period',
            width: '100px',
        },
        {
            title: 'Vị trí công tác',
            key: 'workingPosition',
            dataIndex: 'workingPosition',
            width: '150px',
        },
        {
            title: 'Lĩnh vực chuyên môn',
            key: 'major',
            dataIndex: 'major',
            width: '150px',
        },
        {
            title: 'Cơ quan công tác',
            key: 'office',
            dataIndex: 'office',
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
            workingProcessID: 'CT0001',
            period: '2023-05-08',
            workingPosition: 'Nhân viên',
            major: 'CNTT',
            office: 'Học viện',
        },
        {
            key: 2,
            employeeID: 'CB0002',
            workingProcessID: 'CT0001',
            period: '2023-05-08',
            workingPosition: 'Nhân viên',
            major: 'CNTT',
            office: 'Học viện',
        },
        {
            key: 3,
            employeeID: 'CB0003',
            workingProcessID: 'CT0001',
            period: '2023-05-08',
            workingPosition: 'Nhân viên',
            major: 'CNTT',
            office: 'Học viện',
        },
        {
            key: 4,
            employeeID: 'CB0004',
            workingProcessID: 'CT0001',
            period: '2023-05-08',
            workingPosition: 'Nhân viên',
            major: 'CNTT',
            office: 'Học viện',
        },
        {
            key: 5,
            employeeID: 'CB0005',
            workingProcessID: 'CT0001',
            period: '2023-05-08',
            workingPosition: 'Nhân viên',
            major: 'CNTT',
            office: 'Học viện',
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
                    <WorkingProcess_ChildInput
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

export default Management_Employees_Details_WorkingProcess;
