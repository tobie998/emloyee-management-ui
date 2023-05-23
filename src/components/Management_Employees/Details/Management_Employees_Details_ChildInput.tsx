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
import Management_Employees_Details_TrainingProcess from './Details_Dialog/Management_Employees_Details_TrainingProcess';
import Management_Employees_Details_EnglishKnowledge from './Details_Dialog/Management_Employees_Details_LanguageKnowledge';
import Management_Employees_Details_WorkingProcess from './Details_Dialog/Management_Employees_Details_WorkingProcess';
import Management_Employees_Details_Award from './Details_Dialog/Management_Employees_Details_Award';
import Management_Employees_Details_Reward from './Details_Dialog/Management_Employees_Details_Reward';
import Management_Employees_Details_Punishment from './Details_Dialog/Management_Employees_Details_Punishment';
import Management_Employees_Details_PublicResearch from './Details_Dialog/Management_Employees_Details_PublicResearch';
import Management_Employees_Details_GivenDegree from './Details_Dialog/Management_Employees_Details_GivenDegree';
import Management_Employees_Details_GuidedResearchers from './Details_Dialog/Management_Employees_Details_GuidedResearchers';
import Management_Employees_Details_PracticalResearch from './Details_Dialog/Management_Employees_Details_PracticalResearch';
import Management_Employees_Details_ResearchAssessment from './Details_Dialog/Management_Employees_Details_ResearchAssessment';
import Management_Employees_Details_ResearchJoinedProject from './Details_Dialog/Management_Employees_Details_ResearchJoinedProject';
import Management_Employees_Details_ResearchOwnedProject from './Details_Dialog/Management_Employees_Details_ResearchOwnedProject';
import Management_Employees_Details_TeachingRole from './Details_Dialog/Management_Employees_Details_TeachingRole';
import Management_Employees_Details_WorkingRole from './Details_Dialog/Management_Employees_Details_WorkingRole';

// import { DataType } from './Management_Employees_Details_Table';
interface Props {
    onClickOK: any;
    onClickCancel: any;
    childInputItem: any;
    mode: string;
}

const Management_Employees_Details_ChildInput: React.FC<Props> = (props: Props) => {
    const { childInputItem, mode } = props;
    
    const [employeeName, setEmployeeName] = useState(childInputItem.hoten);
    const [employeeSex, setEmployeeSex] = useState(childInputItem.gioitinh);
    const [employeeDOB, setEmployeeDOB] = useState(childInputItem.namsinh);
    const [academicRank, setAcademicRank] = useState(childInputItem.hocham);
    const [academicRankYear, setAcademicRankYear] = useState(mode !== 'add' ? childInputItem.namhocham : '');
    const [degree, setDegree] = useState(childInputItem.hocvi);
    const [researchCategory, setResearchCategory] = useState('');
    const [titleText, setTitleText] = useState('');

    const [isOpenWarningDialog, setIsOpenWarningDialog] = useState(false);
    const [isOpenLearningProcess, setIsOpenLearningProcess] = useState(false);
    const [isOpenEnglishKnowledge, setIsOpenEnglishKnowledge] = useState(false);
    const [isOpenWorkingProcess, setIsOpenWorkingProcess] = useState(false);
    const [isOpenAward, setIsOpenAward] = useState(false);
    const [isOpenReward, setIsOpenReward] = useState(false);
    const [isOpenPunishment, setIsOpenPunishment] = useState(false);
    const [isOpenPublicResearch, setIsOpenPublicResearch] = useState(false);
    const [isOpenGivenDegree, setIsOpenGivenDegree] = useState(false);
    const [isOpenGuidedResearchers, setIsOpenGuidedResearchers] = useState(false);
    const [isOpenPracticalResearch, setIsOpenPracticalResearch] = useState(false);
    const [isOpenResearchAssessment, setIsOpenResearchAssessment] = useState(false);
    const [isOpenResearchJoinedProject, setIsOpenResearchJoinedProject] = useState(false);
    const [isOpenResearchOwnedProject, setIsOpenResearchOwnedProject] = useState(false);
    const [isOpenTeachingRole, setIsOpenTeachingRole] = useState(false);
    const [isOpenWorkingRole, setIsOpenWorkingRole] = useState(false);

    const handleOpenLearningProcess = () => {
        console.log('open');
        setIsOpenLearningProcess(true);
    };

    // const handleOpenEnglishKnowledge = () => {
    //     setIsOpenEnglishKnowledge(true);
    // };

    // const handleOpenWorkingProcess = () => {
    //     setIsOpenWorkingProcess(true);
    // };

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
            case MODE.EDIT:
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
                            value={academicRankYear}
                            picker="year"
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

                <Row gutter={[32, 32]} className="mb-8">
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

                <Row gutter={[32, 32]} className="mb-5">
                    <Col span={4}>
                        <Button_Normal label="Quá trình đào tạo" onClick={handleOpenLearningProcess}></Button_Normal>
                    </Col>

                    <Col span={4}>
                        <Button_Normal
                            label="Trình độ ngoại ngữ"
                            onClick={() => setIsOpenEnglishKnowledge(true)}
                        ></Button_Normal>
                    </Col>

                    <Col span={4}>
                        <Button_Normal
                            label="Quá trình công tác"
                            onClick={() => setIsOpenWorkingProcess(true)}
                        ></Button_Normal>
                    </Col>

                    <Col span={4}>
                        <Button_Normal label="Giải thưởng" onClick={() => setIsOpenAward(true)}></Button_Normal>
                    </Col>

                    <Col span={4}>
                        <Button_Normal label="Khen thưởng" onClick={() => setIsOpenReward(true)}></Button_Normal>
                    </Col>

                    <Col span={4}>
                        <Button_Normal label="Kỷ luật" onClick={() => setIsOpenPunishment(true)}></Button_Normal>
                    </Col>

                    <Col md={20} lg={16} xl={12}>
                        <Button_Normal
                            label="Công trình KH&CN chủ yếu được công bố, sách chuyên khảo"
                            onClick={() => setIsOpenPublicResearch(true)}
                        ></Button_Normal>
                    </Col>

                    <Col md={12} lg={8} xl={6}>
                        <Button_Normal
                            label="Số lượng văn bằng đã được cấp"
                            onClick={() => setIsOpenGivenDegree(true)}
                        ></Button_Normal>
                    </Col>

                    <Col md={20} lg={8} xl={6}>
                        <Button_Normal
                            label="NCS đã hướng dẫn thành công"
                            onClick={() => setIsOpenGuidedResearchers(true)}
                        ></Button_Normal>
                    </Col>

                    <Col md={20} lg={16} xl={8}>
                        <Button_Normal
                            label="Số lượng công trình, kết quả nghiên cứu đã áp dụng trong thực tiễn"
                            onClick={() => setIsOpenPracticalResearch(true)}
                        ></Button_Normal>
                    </Col>

                    <Col md={20} lg={12} xl={8}>
                        <Button_Normal
                            label="Kinh nghiệm về quản lý, đánh giá KH&CN"
                            onClick={() => setIsOpenResearchAssessment(true)}
                        ></Button_Normal>
                    </Col>

                    <Col md={20} lg={12} xl={8}>
                        <Button_Normal
                            label="Đề tài, dự án, nhiệm vụ KH&CN đã tham gia"
                            onClick={() => setIsOpenResearchJoinedProject(true)}
                        ></Button_Normal>
                    </Col>

                    <Col md={20} lg={12} xl={8}>
                        <Button_Normal
                            label="Đề tài, dự án, nhiệm vụ KH&CN đã chủ trì"
                            onClick={() => setIsOpenResearchOwnedProject(true)}
                        ></Button_Normal>
                    </Col>

                    <Col span={4}>
                        <Button_Normal label="Chức danh" onClick={() => setIsOpenTeachingRole(true)}></Button_Normal>
                    </Col>

                    <Col span={4}>
                        <Button_Normal label="Chức vụ" onClick={() => setIsOpenWorkingRole(true)}></Button_Normal>
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

                {isOpenLearningProcess ? (
                    <Management_Employees_Details_TrainingProcess
                        dialogTitle="Quá trình đào tạo"
                        onCancel={() => setIsOpenLearningProcess(false)}
                        onClickOk={() => {
                            console.log('data');
                            setIsOpenLearningProcess(false);
                        }}
                    />
                ) : (
                    ''
                )}

                {isOpenEnglishKnowledge ? (
                    <Management_Employees_Details_EnglishKnowledge
                        dialogTitle="Trình độ ngoại ngữ"
                        onCancel={() => setIsOpenEnglishKnowledge(false)}
                        onClickOk={() => {
                            console.log('data');
                            setIsOpenEnglishKnowledge(false);
                        }}
                    />
                ) : (
                    ''
                )}

                {isOpenWorkingProcess ? (
                    <Management_Employees_Details_WorkingProcess
                        dialogTitle="Quá trình công tác"
                        onCancel={() => setIsOpenWorkingProcess(false)}
                        onClickOk={() => {
                            console.log('data');
                            setIsOpenWorkingProcess(false);
                        }}
                    />
                ) : (
                    ''
                )}

                {isOpenAward ? (
                    <Management_Employees_Details_Award
                        dialogTitle="Quá trình công tác"
                        onCancel={() => setIsOpenAward(false)}
                        onClickOk={() => {
                            console.log('data');
                            setIsOpenAward(false);
                        }}
                    />
                ) : (
                    ''
                )}

                {isOpenReward ? (
                    <Management_Employees_Details_Reward
                        dialogTitle="Khen thưởng"
                        onCancel={() => setIsOpenReward(false)}
                        onClickOk={() => {
                            console.log('data');
                            setIsOpenReward(false);
                        }}
                    />
                ) : (
                    ''
                )}

                {isOpenPunishment ? (
                    <Management_Employees_Details_Punishment
                        dialogTitle="Kỷ luật"
                        onCancel={() => setIsOpenPunishment(false)}
                        onClickOk={() => {
                            console.log('data');
                            setIsOpenPunishment(false);
                        }}
                    />
                ) : (
                    ''
                )}

                {isOpenPublicResearch ? (
                    <Management_Employees_Details_PublicResearch
                        dialogTitle="Công trình KH&CN chủ yếu được công bố"
                        onCancel={() => setIsOpenPublicResearch(false)}
                        onClickOk={() => {
                            console.log('data');
                            setIsOpenPublicResearch(false);
                        }}
                    />
                ) : (
                    ''
                )}

                {isOpenGivenDegree ? (
                    <Management_Employees_Details_GivenDegree
                        dialogTitle="Văn bằng đã cấp"
                        onCancel={() => setIsOpenGivenDegree(false)}
                        onClickOk={() => {
                            console.log('data');
                            setIsOpenGivenDegree(false);
                        }}
                    />
                ) : (
                    ''
                )}

                {isOpenGuidedResearchers ? (
                    <Management_Employees_Details_GuidedResearchers
                        dialogTitle="NCS đã hướng dẫn"
                        onCancel={() => setIsOpenGuidedResearchers(false)}
                        onClickOk={() => {
                            console.log('data');
                            setIsOpenGuidedResearchers(false);
                        }}
                    />
                ) : (
                    ''
                )}

                {isOpenPracticalResearch ? (
                    <Management_Employees_Details_PracticalResearch
                        dialogTitle="Công trình, kết quả nghiên cứu đã áp dụng"
                        onCancel={() => setIsOpenPracticalResearch(false)}
                        onClickOk={() => {
                            console.log('data');
                            setIsOpenPracticalResearch(false);
                        }}
                    />
                ) : (
                    ''
                )}

                {isOpenResearchAssessment ? (
                    <Management_Employees_Details_ResearchAssessment
                        dialogTitle="Kinh nghiệm về quản lý, đánh giá KH&CN"
                        onCancel={() => setIsOpenResearchAssessment(false)}
                        onClickOk={() => {
                            console.log('data');
                            setIsOpenResearchAssessment(false);
                        }}
                    />
                ) : (
                    ''
                )}

                {isOpenResearchJoinedProject ? (
                    <Management_Employees_Details_ResearchJoinedProject
                        dialogTitle="Đề tài, dự án, nhiệm vụ KH&CN tham gia"
                        onCancel={() => setIsOpenResearchJoinedProject(false)}
                        onClickOk={() => {
                            console.log('data');
                            setIsOpenResearchJoinedProject(false);
                        }}
                    />
                ) : (
                    ''
                )}

                {isOpenResearchOwnedProject ? (
                    <Management_Employees_Details_ResearchOwnedProject
                        dialogTitle="Đề tài, dự án, nhiệm vụ KH&CN chủ trì"
                        onCancel={() => setIsOpenResearchOwnedProject(false)}
                        onClickOk={() => {
                            console.log('data');
                            setIsOpenResearchOwnedProject(false);
                        }}
                    />
                ) : (
                    ''
                )}

                {isOpenTeachingRole ? (
                    <Management_Employees_Details_TeachingRole
                        dialogTitle="Chức danh"
                        onCancel={() => setIsOpenTeachingRole(false)}
                        onClickOk={() => {
                            console.log('data');
                            setIsOpenTeachingRole(false);
                        }}
                    />
                ) : (
                    ''
                )}

                {isOpenWorkingRole ? (
                    <Management_Employees_Details_WorkingRole
                        dialogTitle="Chức danh"
                        onCancel={() => setIsOpenWorkingRole(false)}
                        onClickOk={() => {
                            console.log('data');
                            setIsOpenWorkingRole(false);
                        }}
                    />
                ) : (
                    ''
                )}
            </Card>
        </Overlay>
    );
};

export default Management_Employees_Details_ChildInput;
