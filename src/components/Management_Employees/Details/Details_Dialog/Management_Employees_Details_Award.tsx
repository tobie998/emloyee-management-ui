import { Card, Col, Row, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { getAwardDetail } from '../../../../store/employees/detail/awardDetailSlice';

interface DataType {
    key: number;
    employeeID: string;
    awardID: string;
    form: string;
    content: string;
    year: number;
}

interface Props {
    onCancel: any;
    onClickOk: any;
    dialogTitle: string;
    childInputItem: any;
}

interface childInputProps {
    mode: string;
    onClickCancel: any;
    onClickOk: any;
    childInputItem: any;
}

const Award_ChildInput: React.FC<childInputProps> = (props: childInputProps) => {
    const { mode, childInputItem } = props;
    console.log(childInputItem);
    const [isOpenWarningDialog, setIsOpenWarningDialog] = useState(false);
    const [award, setAward] = useState('');
    const [form, setForm] = useState('');

    const awardList = useSelector((state: any) => state.award.awardList);
    console.log(awardList);

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
                title={`Giải thưởng [${mode}]`}
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
                            value={childInputItem}
                            onChange={() => {
                                console.log('abcd');
                            }}
                            onBlur={() => console.log('onBlur')}
                            disabled={true}
                        />
                    </Col>

                    <Col span={8}>
                        <Input_Select
                            label="Mã giải thưởng"
                            onChange={(value: string) => {
                                console.log(value);
                                setAward(value);
                            }}
                            onBlur={() => console.log('onBlur')}
                            options={awardList}
                        />
                    </Col>

                    <Col span={8}>
                        <Input_Select
                            label="Hình thức"
                            onChange={(value: string) => {
                                console.log(value);
                                setForm(value);
                            }}
                            onBlur={() => console.log('onBlur')}
                            options={researchCategoryList}
                        />
                    </Col>

                    <Col span={8}>
                        <Input_Text
                            label="Nội dung"
                            value={`employeeName`}
                            onChange={() => {
                                console.log('abcd');
                            }}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={8}>
                        <Input_DatePicker
                            label="Năm tặng thưởng"
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

const Management_Employees_Details_Award: React.FC<Props> = (props: Props) => {
    const { dialogTitle, childInputItem } = props;
    console.log(childInputItem)
    const [isOpenChildInput, setIsOpenChildInput] = useState(false);
    const [childItem, setChildItem] = useState({});
    const [dataTable, setDataTable] = useState([]);

    const dispatch = useDispatch();
    const awardDetailList = useSelector((state: any) => state.awardDetail.awardDetailList);

    useEffect(() => {
        if (awardDetailList) {
            const dataTable = awardDetailList.map((item: any, index: any) => {
                return { ...item, key: index + 1 };
            });
            setDataTable(dataTable);
        }
    }, [awardDetailList]);
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
            title: 'Mã giải thưởng',
            dataIndex: 'awardID',
            key: 'awardID',
            width: '150px',
        },
        {
            title: 'Hình thức',
            key: 'form',
            dataIndex: 'form',
            width: '100px',
        },
        {
            title: 'Nội dung',
            key: 'content',
            dataIndex: 'content',
            width: '150px',
        },
        {
            title: 'Năm tặng thưởng',
            key: 'year',
            dataIndex: 'year',
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
                            setChildItem(record);
                        }}
                    />
                    <EditOutlined
                        className="text-main-color text-xl"
                        onClick={() => {
                            setIsOpenChildInput(true);
                            setChildItem(record);
                        }}
                    />
                </Space>
            ),
        },
    ];

    const handleReset = () => {
        console.log('reset');
        getAwardList();
    };

    const handleAdd = () => {
        console.log('clear');
        setIsOpenChildInput(true);
    };

    const getAwardList = () => {
        dispatch(getAwardDetail());
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
                        <Table columns={columns} dataSource={dataTable} scroll={{ y: 100 }} size="small" />;
                    </Col>
                </Row>

                {isOpenChildInput ? (
                    <Award_ChildInput
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

export default Management_Employees_Details_Award;
