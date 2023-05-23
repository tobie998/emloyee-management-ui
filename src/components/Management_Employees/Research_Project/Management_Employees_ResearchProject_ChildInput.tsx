import React, { useEffect, useState } from 'react';
import Overlay from '../../../layout/Overlay';
import { Card, Col, Row } from 'antd';
import Button_Normal from '../../common/Button_Normal';
import Input_Text from '../../common/Input_Text';
import Dialog_Warning from '../../common/Dialog_Warning';
import { MODE } from '../../../constant/constant';
import { useDispatch } from 'react-redux';
import {
    deleteResearchProject,
    postResearchProject,
    putResearchProject,
} from '../../../store/employees/employee/researchProjectSlice';
interface Props {
    onClickOK: any;
    onClickCancel: any;
    childInputItem: any;
    mode: string;
}

const Management_Employees_ResearchProject_ChildInput: React.FC<Props> = (props: Props) => {
    const { childInputItem, mode } = props;

    const [researchProjectID, setResearchProjectID] = useState(mode !== MODE.ADD ? childInputItem.maDeTai : '');
    const [researchProjectName, setResearchProjectName] = useState(mode !== MODE.ADD ? childInputItem.tenDeTai : '');
    const [isOpenWarningDialog, setIsOpenWarningDialog] = useState(false);

    const [titleText, setTitleText] = useState('');
    const [messageID, setMessageID] = useState('');
    const [messageContent, setMessageContent] = useState('');
    const dispatch = useDispatch();
    const handleDelete = () => {
        setMessageID('DELETE');
        setMessageContent('Xóa Đề tài dự án KH&CN');
        setIsOpenWarningDialog(true);
    };

    const handleCancel = () => {
        console.log('cancel');
        props.onClickCancel();
    };

    const handleValidate = () => {
        if (!researchProjectID) {
            setIsOpenWarningDialog(true);
            setMessageID('ERROR');
            setMessageContent('Mã Đề tài dự án KH&CN chưa nhập');
            return;
        }
        setIsOpenWarningDialog(true);
        setMessageID(mode == MODE.ADD ? MODE.ADD : MODE.EDIT);
        setMessageContent(mode == MODE.ADD ? 'Thêm mới?' : 'Sửa Đề tài dự án KH&CN?');
    };

    const handleCancelWarningDialog = () => {
        console.log('close dialog');
        setIsOpenWarningDialog(false);
    };

    const handleClickOk = async () => {
        const researchProjectObj = {
            maDeTai: researchProjectID,
            tenDeTai: researchProjectName,
        };
        if (messageID == MODE.ADD) {
            console.log(researchProjectObj);
            await dispatch(postResearchProject(researchProjectObj));
            props.onClickOK();
        } else if (messageID == MODE.EDIT) {
            console.log(researchProjectObj);
            await dispatch(putResearchProject(researchProjectObj));
            props.onClickOK();
        } else if (messageID == 'DELETE') {
            await dispatch(deleteResearchProject(researchProjectObj.maDeTai));
            props.onClickOK();
        }

        setIsOpenWarningDialog(false);
    };

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
                title={`Đề tài dự án KH&CN [${titleText}]`}
                headStyle={{ background: '#006D75', color: 'white' }}
                bodyStyle={{ overflowY: 'auto', height: 'inherit' }}
                style={{ background: '#fff', width: '50%', height: 'fit-content', border: 'none' }}
                className="shadow-lg"
                actions={[
                    <Row key="action" className="px-6">
                        <Col span={2}>
                            <Button_Normal label="Xóa" btnColor="#ef4444" onClick={handleDelete}></Button_Normal>
                        </Col>

                        <Col span={8} offset={14}>
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
                            label="Mã đề tài"
                            value={researchProjectID}
                            onChange={(e: any) => setResearchProjectID(e.target.value)}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={6}>
                        <Input_Text
                            label="Tên đề tài"
                            value={researchProjectName}
                            onChange={(e: any) => setResearchProjectName(e.target.value)}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>
                </Row>

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

export default Management_Employees_ResearchProject_ChildInput;
