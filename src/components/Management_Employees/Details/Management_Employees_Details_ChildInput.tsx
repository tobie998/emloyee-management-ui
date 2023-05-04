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

interface Props {
    onClickOK: any;
    onClickCancel: any;
}

const Management_Employees_Details_ChildInput: React.FC<Props> = (props: Props) => {
    const [employeeName, setEmployeeName] = useState('');
    const [employeeSex, setEmployeeSex] = useState('');
    const [academicRank, setAcademicRank] = useState('');
    const [degree, setDegree] = useState('');
    const [researchCategory, setResearchCategory] = useState('');

    const [isOpenWarningDialog, setIsOpenWarningDialog] = useState(false);

    const handleOpenLearningProcess = () => {
        console.log('open');
    };

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

    const handleCancelWarningDialog = () => {
        console.log('close dialog');
        setIsOpenWarningDialog(false);
    };

    const handleClickOk = () => {
        console.log('click ok');
        setIsOpenWarningDialog(false);

        props.onClickOK();
    };

    return (
        <Overlay>
            <Card
                title="Thông tin cán bộ [Thêm mới]"
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
                            label="Họ và tên"
                            value={employeeName}
                            onChange={(e: any) => setEmployeeName(e.target.value)}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={6}>
                        <Input_DatePicker
                            label="Năm sinh"
                            onChange={(date: any, dateString: any) => console.log(date, dateString)}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={4}>
                        <Input_Radio
                            label="Giới tính"
                            value={employeeSex}
                            onChange={(e: RadioChangeEvent) => setEmployeeSex(e.target.value)}
                            radioValue={[
                                { name: 'Name', value: 'male' },
                                { name: 'Nữ', value: 'female' },
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
                            label="Năm được phong"
                            onChange={(date: any, dateString: any) => console.log(date, dateString)}
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
                            onChange={(date: any, dateString: any) => console.log(date, dateString)}
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

                <Row gutter={[32, 0]} className="mb-5">
                    <Col span={6}>
                        <Input_Select
                            label="Chức danh giảng dạy, nghiên cứu"
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
                            label="Chức vụ hiện nay"
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

                <Row gutter={[32, 32]} className="mb-5">
                    <Col span={6}>
                        <Input_Text
                            label="Địa chỉ nhà riêng"
                            value={degree}
                            onChange={(e: any) => setDegree(e.target.value)}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={6}>
                        <Input_Number
                            label="Điện thoại nhà riêng"
                            value={degree}
                            onChange={(e: any) => setDegree(e.target.value)}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={6}>
                        <Input_Number
                            label="Điện thoại cơ quan"
                            value={degree}
                            onChange={(e: any) => setDegree(e.target.value)}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={6}></Col>

                    <Col span={6}>
                        <Input_Number
                            label="Mobile"
                            value={degree}
                            onChange={(e: any) => setDegree(e.target.value)}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={6}>
                        <Input_Text
                            label="Email"
                            value={degree}
                            onChange={(e: any) => setDegree(e.target.value)}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>
                </Row>

                <Divider className="min-w-[25%] w-3/12 mb-5" style={{ margin: '16px auto', fontSize: '12px' }}>
                    Đơn vị công tác
                </Divider>

                <Row gutter={[32, 32]} className="mb-8">
                    <Col span={6}>
                        <Input_Select
                            label="Tên đơn vị"
                            onChange={(value: string) => {
                                console.log(value);
                                setResearchCategory(value);
                            }}
                            onBlur={() => console.log('onBlur')}
                            options={researchCategoryList}
                        />
                    </Col>

                    <Col span={6}>
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
                    </Col>
                </Row>

                <Row gutter={[32, 32]} className="mb-5">
                    <Col span={4}>
                        <Button_Normal label="Quá trình đào tạo" onClick={handleOpenLearningProcess}></Button_Normal>
                    </Col>

                    <Col span={4}>
                        <Button_Normal label="Trình độ ngoại ngữ" onClick={handleOpenLearningProcess}></Button_Normal>
                    </Col>

                    <Col span={4}>
                        <Button_Normal label="Quá trình công tác" onClick={handleOpenLearningProcess}></Button_Normal>
                    </Col>

                    <Col span={4}>
                        <Button_Normal label="Quá trình đào tạo" onClick={handleOpenLearningProcess}></Button_Normal>
                    </Col>

                    <Col span={4}>
                        <Button_Normal label="Giải thưởng" onClick={handleOpenLearningProcess}></Button_Normal>
                    </Col>

                    <Col span={4}></Col>

                    <Col md={20} lg={16} xl={12}>
                        <Button_Normal
                            label="Công trình KH&CN chủ yếu được công bố, sách chuyên khảo"
                            onClick={handleOpenLearningProcess}
                        ></Button_Normal>
                    </Col>

                    <Col md={12} lg={8} xl={6}>
                        <Button_Normal
                            label="Số lượng văn bằng đã được cấp"
                            onClick={handleOpenLearningProcess}
                        ></Button_Normal>
                    </Col>

                    <Col md={20} lg={8} xl={6}>
                        <Button_Normal
                            label="NCS đã hướng dẫn thành công"
                            onClick={handleOpenLearningProcess}
                        ></Button_Normal>
                    </Col>

                    <Col md={20} lg={16} xl={8}>
                        <Button_Normal
                            label="Số lượng công trình, kết quả nghiên cứu đã áp dụng trong thực tiễn"
                            onClick={handleOpenLearningProcess}
                        ></Button_Normal>
                    </Col>

                    <Col md={20} lg={12} xl={8}>
                        <Button_Normal
                            label="Kinh nghiệm về quản lý, đánh giá KH&CN"
                            onClick={handleOpenLearningProcess}
                        ></Button_Normal>
                    </Col>

                    <Col md={20} lg={12} xl={8}>
                        <Button_Normal
                            label="Đề tài, dự án, nhiệm vụ KH&CN đã chủ trì hoặc tham gia"
                            onClick={handleOpenLearningProcess}
                        ></Button_Normal>
                    </Col>
                </Row>

                {isOpenWarningDialog ? (
                    <Dialog_Warning
                        messageContent="Bạn muốn thêm mới?"
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

export default Management_Employees_Details_ChildInput;