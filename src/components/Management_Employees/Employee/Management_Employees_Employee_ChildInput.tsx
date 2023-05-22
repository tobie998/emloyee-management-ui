import React, { useCallback, useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { deleteEmployee, postEmployee, putEmployee } from '../../../store/employees/employee/employeeSlice';
import { MODE } from '../../../constant/constant';

interface Props {
    onClickOK: any;
    onClickCancel: any;
    childInputItem: any;
    mode: string;
}

const Management_Employees_Employee_ChildInput: React.FC<Props> = (props: Props) => {
    const { childInputItem, mode } = props;
    const { macanbo } = childInputItem;
    console.log(macanbo);

    const dispatch = useDispatch();
    const employeeListByID = useSelector((state: any) => state.employee.employeeListByID);
    console.log('employeeListByID', employeeListByID);

    const [employeeID, setEmployeeID] = useState(mode !== MODE.ADD ? childInputItem.macanbo : '');
    const [employeeName, setEmployeeName] = useState(mode !== MODE.ADD ? childInputItem.hoten : '');
    const [employeeSex, setEmployeeSex] = useState(mode !== MODE.ADD ? childInputItem.gioitinh : '');
    const [employeeDOB, setEmployeeDOB] = useState(mode !== MODE.ADD ? childInputItem.namsinh : '');
    const [academicRank, setAcademicRank] = useState(mode !== MODE.ADD ? childInputItem.hocham : '');
    const [academicRankYear, setAcademicRankYear] = useState(mode !== MODE.ADD ? childInputItem.namhocham : '');
    const [degree, setDegree] = useState(mode !== MODE.ADD ? childInputItem.hocvi : '');
    const [degreeYear, setDegreeYear] = useState(mode !== MODE.ADD ? childInputItem.namhocvi : '');
    const [personalAddress, setPersonalAddress] = useState(mode !== MODE.ADD ? childInputItem.diachinharieng : '');
    const [personalPhone, setPersonalPhone] = useState(mode !== MODE.ADD ? childInputItem.dienthoainharieng : 0);
    const [officialPhone, setOfficialPhone] = useState(mode !== MODE.ADD ? childInputItem.dienthoaicoquan : '');
    const [mobile, setMobile] = useState(mode !== MODE.ADD ? childInputItem.mobile : '');
    const [email, setEmail] = useState(mode !== MODE.ADD ? childInputItem.email : '');
    const [researchCategory, setResearchCategory] = useState('');
    const [titleText, setTitleText] = useState('');

    const [isOpenWarningDialog, setIsOpenWarningDialog] = useState(false);
    const [messageID, setMessageID] = useState('');
    const [messageContent, setMessageContent] = useState('');

    // const handleGetListByID = useCallback(async () => {
    //     await dispatch(getEmployeeByID(macanbo));
    // }, []);

    // useEffect(() => {
    //     handleGetListByID();
    // }, [handleGetListByID]);

    const handleDelete = () => {
        setMessageID('DELETE');
        setMessageContent('Xóa cán bộ?');
        setIsOpenWarningDialog(true);
    };

    const handleCancel = () => {
        props.onClickCancel();
    };

    const handleValidate = () => {
        if (!employeeID) {
            setIsOpenWarningDialog(true);
            setMessageID('ERROR');
            setMessageContent('Mã cán bộ chưa nhập');
            return;
        }
        setIsOpenWarningDialog(true);
        setMessageID(mode == MODE.ADD ? MODE.ADD : MODE.EDIT);
        setMessageContent(mode == MODE.ADD ? 'Thêm mới?' : 'Sửa thông tin cán bộ?');
    };

    const handleCancelWarningDialog = () => {
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
            namhocvi: degreeYear ? parseInt(degreeYear) : '',
            namhocham: academicRankYear ? parseInt(academicRankYear) : '',
            diachinharieng: personalAddress,
            dienthoainharieng: personalPhone,
            dienthoaicoquan: officialPhone,
            mobile: mobile,
            email: email,
            madonvi: 1,
            bacluong: '',
            luongcoban: 2000000,
        };
        if (messageID == MODE.ADD) {
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
            case MODE.ADD:
                setTitleText('Thêm mới');
                break;
            case MODE.EDIT:
                setTitleText('Sửa');
                break;
            case MODE.INFO:
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
                                    <Button_Normal
                                        label={mode == MODE.ADD ? 'Thêm mới' : 'Sửa'}
                                        onClick={handleValidate}
                                    ></Button_Normal>
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
                            disabled={mode == (MODE.EDIT || MODE.INFO)}
                        />
                    </Col>
                    <Col span={6}>
                        <Input_Text
                            label="Họ và tên"
                            value={employeeName}
                            onChange={(e: any) => setEmployeeName(e.target.value)}
                            onBlur={() => console.log('onBlur')}
                            disabled={mode == MODE.INFO}
                        />
                    </Col>

                    <Col span={6}>
                        <Input_DatePicker
                            label="Năm sinh"
                            value={employeeDOB}
                            onChange={(date: any, dateString: any) => setEmployeeDOB(dateString)}
                            onBlur={() => console.log('onBlur')}
                            disabled={mode == MODE.INFO}
                        />
                    </Col>

                    <Col span={4}>
                        <Input_Radio
                            label="Giới tính"
                            value={employeeSex}
                            onChange={(e: RadioChangeEvent) => setEmployeeSex(e.target.value)}
                            radioValue={[
                                { name: 'Name', value: true },
                                { name: 'Nữ', value: false },
                            ]}
                            disabled={mode == MODE.INFO}
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
                            disabled={mode == MODE.INFO}
                        />
                    </Col>

                    <Col span={6}>
                        <Input_DatePicker
                            label="Năm học hàm"
                            value={academicRankYear}
                            picker="year"
                            onChange={(date: any, dateString: any) => {
                                console.log(dateString);
                                setAcademicRankYear(dateString);
                            }}
                            onBlur={() => console.log('onBlur')}
                            disabled={mode == MODE.INFO}
                        />
                    </Col>

                    <Col span={6}>
                        <Input_Text
                            label="Học vị"
                            value={degree}
                            onChange={(e: any) => setDegree(e.target.value)}
                            onBlur={() => console.log('onBlur')}
                            disabled={mode == MODE.INFO}
                        />
                    </Col>

                    <Col span={6}>
                        <Input_DatePicker
                            label="Năm đạt học vị"
                            value={degreeYear}
                            picker="year"
                            onChange={(date: any, dateString: any) => setDegreeYear(dateString)}
                            onBlur={() => console.log('onBlur')}
                            disabled={mode == MODE.INFO}
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
                            disabled={mode == MODE.INFO}
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
                            disabled={mode == MODE.INFO}
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
                            disabled={mode == MODE.INFO}
                        />
                    </Col>

                    <Col span={6}>
                        <Input_Number
                            label="Điện thoại nhà riêng"
                            value={personalPhone}
                            onChange={(value: any) => setPersonalPhone(value)}
                            onBlur={() => console.log('onBlur')}
                            disabled={mode == MODE.INFO}
                        />
                    </Col>

                    <Col span={6}>
                        <Input_Number
                            label="Điện thoại cơ quan"
                            value={officialPhone}
                            onChange={(value: any) => setOfficialPhone(value)}
                            onBlur={() => console.log('onBlur')}
                            disabled={mode == MODE.INFO}
                        />
                    </Col>

                    <Col span={6}></Col>

                    <Col span={6}>
                        <Input_Number
                            label="Mobile"
                            value={mobile}
                            onChange={(value: any) => setMobile(value)}
                            onBlur={() => console.log('onBlur')}
                            disabled={mode == MODE.INFO}
                        />
                    </Col>

                    <Col span={6}>
                        <Input_Text
                            label="Email"
                            value={email}
                            onChange={(e: any) => setEmail(e.target.value)}
                            onBlur={() => console.log('onBlur')}
                            disabled={mode == MODE.INFO}
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
                            disabled={mode == MODE.INFO}
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
