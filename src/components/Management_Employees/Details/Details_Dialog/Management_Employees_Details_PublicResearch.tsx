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
    publicResearchID: string;
    publicResearchForm: string;
    publicResearchName: string;
    role: string;
    publicResearchLocation: string;
    publicResearchYear: string;
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

const EnglishKnowledge_ChildInput: React.FC<childInputProps> = (props: childInputProps) => {
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
                title={`Công trình KH&CN được công bố [${mode}]`}
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
                            label="Mã công trình KH&CN"
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
                            label="Loại công trình KH&CN"
                            value={`employeeName`}
                            onChange={() => {
                                console.log('abcd');
                            }}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={8}>
                        <Input_Text
                            label="Tên công trình KH&CN"
                            value={`employeeName`}
                            onChange={() => {
                                console.log('abcd');
                            }}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={8}>
                        <Input_Text
                            label="Vai trò"
                            value={`employeeName`}
                            onChange={() => {
                                console.log('abcd');
                            }}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={8}>
                        <Input_Text
                            label="Nơi công bố"
                            value={`employeeName`}
                            onChange={() => {
                                console.log('abcd');
                            }}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={8}>
                        <Input_DatePicker
                            label="Năm công bố"
                            onChange={(date: any, dateString: any) => console.log(date, dateString)}
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

const Management_Employees_Details_EnglishKnowledge: React.FC<Props> = (props: Props) => {
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
            title: 'Mã công trình KH&CN',
            dataIndex: 'publicResearchID',
            key: 'publicResearchID',
            width: '150px',
        },
        {
            title: 'Loại công trình KH',
            key: 'publicResearchForm',
            dataIndex: 'publicResearchForm',
            width: '100px',
        },
        {
            title: 'Tên công trình KH',
            key: 'publicResearchName',
            dataIndex: 'publicResearchName',
            width: '150px',
        },
        {
            title: 'Vai trò',
            key: 'role',
            dataIndex: 'role',
            width: '150px',
        },
        {
            title: 'Nơi công bố',
            key: 'publicResearchLocation',
            dataIndex: 'publicResearchLocation',
            width: '150px',
        },
        {
            title: 'Năm công bố',
            key: 'publicResearchYear',
            dataIndex: 'publicResearchYear',
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
            publicResearchID: 'CTCB0001',
            publicResearchForm: 'Tạp chí quốc tế',
            publicResearchName: 'Nghiên cứu...',
            role: 'Tác giả',
            publicResearchLocation: 'Nước ngoài',
            publicResearchYear: '2022-05-08',
        },
        {
            key: 2,
            employeeID: 'CB0002',
            publicResearchID: 'CTCB0001',
            publicResearchForm: 'Tạp chí quốc tế',
            publicResearchName: 'Nghiên cứu...',
            role: 'Tác giả',
            publicResearchLocation: 'Nước ngoài',
            publicResearchYear: '2022-05-08',
        },
        {
            key: 3,
            employeeID: 'CB0003',
            publicResearchID: 'CTCB0001',
            publicResearchForm: 'Tạp chí quốc tế',
            publicResearchName: 'Nghiên cứu...',
            role: 'Tác giả',
            publicResearchLocation: 'Nước ngoài',
            publicResearchYear: '2022-05-08',
        },
        {
            key: 4,
            employeeID: 'CB0004',
            publicResearchID: 'CTCB0001',
            publicResearchForm: 'Tạp chí quốc tế',
            publicResearchName: 'Nghiên cứu...',
            role: 'Tác giả',
            publicResearchLocation: 'Nước ngoài',
            publicResearchYear: '2022-05-08',
        },
        {
            key: 5,
            employeeID: 'CB0005',
            publicResearchID: 'CTCB0001',
            publicResearchForm: 'Tạp chí quốc tế',
            publicResearchName: 'Nghiên cứu...',
            role: 'Tác giả',
            publicResearchLocation: 'Nước ngoài',
            publicResearchYear: '2022-05-08',
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
                    <EnglishKnowledge_ChildInput
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

export default Management_Employees_Details_EnglishKnowledge;
