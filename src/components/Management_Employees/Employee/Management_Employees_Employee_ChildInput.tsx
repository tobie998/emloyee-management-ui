import React, { useEffect, useState } from 'react';
import { Card, Col, Divider, RadioChangeEvent, Row } from 'antd';
import Overlay from '../../../layout/Overlay';
import Input_Text from '../../common/Input_Text';
import Input_DatePicker from '../../common/Input_DatePicker';
import Input_Radio from '../../common/Input_Radio';
import Input_Select from '../../common/Input_Select';
import { researchCategoryList } from '../../../constant/dummy';
import Input_Number from '../../common/Input_Number';
import Button_Normal from '../../common/Button_Normal';
import Dialog_Warning from '../../common/Dialog_Warning';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { deleteEmployee, postEmployee, putEmployee } from '../../../store/employees/employee/employeeSlice';

interface Props {
    onClickOK: any;
    onClickCancel: any;
    childInputItem: any;
    mode: string;
}

const Management_Employees_Employee_ChildInput: React.FC<Props> = (props: Props) => {
    const { childInputItem, mode } = props;
    const dispatch = useDispatch();

    const [employeeID, setEmployeeID] = useState(mode !== 'add' ? childInputItem.macanbo : '');
    const [employeeName, setEmployeeName] = useState(mode !== 'add' ? childInputItem.hoten : '');
    const [employeeSex, setEmployeeSex] = useState(mode !== 'add' ? childInputItem.gioitinh : '');
    const [employeeDOB, setEmployeeDOB] = useState(mode !== 'add' ? childInputItem.namsinh : '');
    const [academicRank, setAcademicRank] = useState(mode !== 'add' ? childInputItem.hocham : '');
    const [academicRankYear, setAcademicRankYear] = useState(mode !== 'add' ? childInputItem.namhocham : '');
    const [degree, setDegree] = useState(mode !== 'add' ? childInputItem.hocvi : '');
    const [degreeYear, setDegreeYear] = useState(mode !== 'add' ? childInputItem.namhocvi : '');
    const [personalAddress, setPersonalAddress] = useState(mode !== 'add' ? childInputItem.diachinharieng : '');
    const [personalPhone, setPersonalPhone] = useState(mode !== 'add' ? childInputItem.dienthoainharieng : 0);
    const [officialPhone, setOfficialPhone] = useState(mode !== 'add' ? childInputItem.dienthoaicoquan : '');
    const [mobile, setMobile] = useState(mode !== 'add' ? childInputItem.mobile : '');
    const [email, setEmail] = useState(mode !== 'add' ? childInputItem.email : '');
    const [researchCategory, setResearchCategory] = useState('');
    const [titleText, setTitleText] = useState('');

    const [isOpenWarningDialog, setIsOpenWarningDialog] = useState(false);
    const [messageID, setMessageID] = useState('');
    const [messageContent, setMessageContent] = useState('');

    const handleDelete = () => {
        console.log('delete');
        setMessageID('DELETE');
        setMessageContent('Xóa cán bộ?');
        setIsOpenWarningDialog(true);
    };

    const handleCancel = () => {
        console.log('cancel');
        props.onClickCancel();
    };

    const handleValidate = () => {
        console.log('validate');
        if (!employeeID) {
            setIsOpenWarningDialog(true);
            setMessageID('ERROR');
            setMessageContent('Mã cán bộ chưa nhập');
            return;
        }
        setIsOpenWarningDialog(true);
        setMessageID(mode == 'add' ? 'ADD' : 'EDIT');
        setMessageContent(mode == 'add' ? 'Thêm mới?' : 'Sửa thông tin cán bộ?');
    };

    const handleCancelWarningDialog = () => {
        console.log('close dialog');
        setIsOpenWarningDialog(false);
    };

    const handleClickOk = async () => {
        const employeeObj = {
            macanbo: employeeID,
            hoten: employeeName,
            namsinh: employeeDOB ? parseInt(dayjs(employeeDOB).format('YYYY-MM-DD').replace('-', '')) : '',
            gioitinh: employeeSex == 'nam',
            hocham: academicRank,
            hocvi: degree,
            namhocvi: degreeYear ? dayjs(degreeYear, 'YYYY').year() : '',
            namhocham: academicRankYear ? dayjs(academicRankYear, 'YYYY').year() : '',
            diachinharieng: personalAddress,
            dienthoainharieng: personalPhone,
            dienthoaicoquan: officialPhone,
            mobile: mobile,
            email: email,
            madonvi: 1,
            bacluong: '',
            luongcoban: 2000000,
        };
        if (messageID == 'ADD') {
            console.log(employeeObj);
            await dispatch(postEmployee(employeeObj));
            props.onClickOK();
        } else if (messageID == 'EDIT') {
            console.log(employeeObj);
            await dispatch(putEmployee(employeeObj));
            props.onClickOK();
        } else if (messageID == 'DELETE') {
            await dispatch(deleteEmployee(employeeID));
            props.onClickOK();
        }

        setIsOpenWarningDialog(false);
    };

    // const handleCancelDetailDialog = () => {
    //     console.log('cancel detail dialog');
    // };

    // const handleOkDetailDialog = () => {
    //     console.log('ok detail dialog');
    // };

    useEffect(() => {
        switch (mode) {
            case 'add':
                setTitleText('Thêm mới');
                break;
            case 'edit':
                setTitleText('Sửa');
                break;
            case 'info':
                setTitleText('Thông tin');
                break;
            default:
                break;
        }
    }, [mode]);

    return (
        <Overlay>
            <Card
                title={`Thông tin cán bộ [${titleText}]`}
                headStyle={{ background: '#006D75', color: 'white' }}
                bodyStyle={{ overflowY: 'auto', height: 'inherit' }}
                style={{ background: '#fff', width: '80%', height: '85%', border: 'none' }}
                className="shadow-lg"
                actions={[
                    <Row key="action" className="px-6">
                        <Col span={2}>
                            <Button_Normal label="Xóa" btnColor="#ef4444" onClick={handleDelete}></Button_Normal>
                        </Col>

                        <Col span={4} offset={18}>
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
                <Row gutter={[32, 0]} className="mb-5">
                    <Col span={6}>
                        <Input_Text
                            label="Mã cán bộ"
                            value={employeeID}
                            onChange={(e: any) => setEmployeeID(e.target.value)}
                            onBlur={() => console.log('onBlur')}
                            disabled={mode == 'edit'}
                        />
                    </Col>
                    <Col span={6}>
                        <Input_Text
                            label="Họ và tên"
                            value={employeeName}
                            onChange={(e: any) => setEmployeeName(e.target.value)}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={6}>
                        <Input_DatePicker
                            label="Năm sinh"
                            value={employeeDOB}
                            picker="year"
                            onChange={(date: any, dateString: any) => setEmployeeDOB(date)}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={4}>
                        <Input_Radio
                            label="Giới tính"
                            value={employeeSex}
                            onChange={(e: RadioChangeEvent) => setEmployeeSex(e.target.value)}
                            radioValue={[
                                { name: 'Name', value: 'nam' },
                                { name: 'Nữ', value: 'nữ' },
                            ]}
                        />
                    </Col>
                </Row>

                <Row gutter={[32, 0]} className="mb-5">
                    <Col span={6}>
                        <Input_Text
                            label="Học hàm"
                            value={academicRank}
                            onChange={(e: any) => setAcademicRank(e.target.value)}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={6}>
                        <Input_DatePicker
                            label="Năm học hàm"
                            value={academicRankYear}
                            picker="year"
                            onChange={(date: any, dateString: any) => setAcademicRankYear(date)}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={6}>
                        <Input_Text
                            label="Học vị"
                            value={degree}
                            onChange={(e: any) => setDegree(e.target.value)}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={6}>
                        <Input_DatePicker
                            label="Năm đạt học vị"
                            value={degreeYear}
                            picker="year"
                            onChange={(date: any, dateString: any) => setDegreeYear(date)}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>
                </Row>

                <Divider className="min-w-[25%] w-3/12 mb-5" style={{ margin: '16px auto', fontSize: '12px' }}>
                    Lĩnh vực nghiên cứu
                </Divider>

                <Row gutter={[32, 0]} className="mb-5">
                    <Col span={6}>
                        <Input_Select
                            label="Lĩnh vực nghiên cứu"
                            onChange={(value: string) => {
                                console.log(value);
                                setResearchCategory(value);
                            }}
                            onBlur={() => console.log('onBlur')}
                            options={researchCategoryList}
                        />
                    </Col>

                    <Col span={6}>
                        <Input_Select
                            label="Chuyên ngành KH&CN"
                            onChange={(value: string) => {
                                console.log(value);
                                setResearchCategory(value);
                            }}
                            onBlur={() => console.log('onBlur')}
                            options={researchCategoryList}
                        />
                    </Col>
                </Row>

                <Divider className="min-w-[25%] w-3/12 mb-5" style={{ margin: '16px auto', fontSize: '12px' }} />

                <Row gutter={[32, 32]} className="mb-8">
                    <Col span={6}>
                        <Input_Text
                            label="Địa chỉ nhà riêng"
                            value={personalAddress}
                            onChange={(e: any) => setPersonalAddress(e.target.value)}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={6}>
                        <Input_Number
                            label="Điện thoại nhà riêng"
                            value={personalPhone}
                            onChange={(value: any) => setPersonalPhone(value)}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={6}>
                        <Input_Number
                            label="Điện thoại cơ quan"
                            value={officialPhone}
                            onChange={(value: any) => setOfficialPhone(value)}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={6}></Col>

                    <Col span={6}>
                        <Input_Number
                            label="Mobile"
                            value={mobile}
                            onChange={(value: any) => setMobile(value)}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={6}>
                        <Input_Text
                            label="Email"
                            value={email}
                            onChange={(e: any) => setEmail(e.target.value)}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={6}>
                        <Input_Select
                            label="Mã đơn vị"
                            onChange={(value: string) => {
                                console.log(value);
                                setResearchCategory(value);
                            }}
                            onBlur={() => console.log('onBlur')}
                            options={researchCategoryList}
                        />
                    </Col>
                </Row>

                {/* <Divider className="min-w-[25%] w-3/12 mb-5" style={{ margin: '16px auto', fontSize: '12px' }}>
                    Đơn vị công tác
                </Divider>

                <Row gutter={[32, 32]} className="mb-8"> */}

                {/* <Col span={6}>
                        <Input_Text
                            label="Tên người đứng đầu"
                            value={degree}
                            onChange={(e: any) => setDegree(e.target.value)}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={6}>
                        <Input_Text
                            label="Địa chỉ"
                            value={degree}
                            onChange={(e: any) => setDegree(e.target.value)}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={6}></Col>

                    <Col span={6}>
                        <Input_Number
                            label="Điện thoại"
                            value={degree}
                            onChange={(e: any) => setDegree(e.target.value)}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={6}>
                        <Input_Number
                            label="Fax"
                            value={degree}
                            onChange={(e: any) => setDegree(e.target.value)}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={6}>
                        <Input_Text
                            label="Website"
                            value={degree}
                            onChange={(e: any) => setDegree(e.target.value)}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col> */}
                {/* </Row> */}
                {isOpenWarningDialog ? (
                    <Dialog_Warning
                        messageContent={messageContent}
                        onCancel={handleCancelWarningDialog}
                        onClickOk={handleClickOk}
                    />
                ) : (
                    ''
                )}
            </Card>
        </Overlay>
    );
};

export default Management_Employees_Employee_ChildInput;
