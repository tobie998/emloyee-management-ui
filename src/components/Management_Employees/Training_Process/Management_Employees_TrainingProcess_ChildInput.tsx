import React, { useEffect, useState } from 'react';
import Overlay from '../../../layout/Overlay';
import { Card, Col, Row } from 'antd';
import Button_Normal from '../../common/Button_Normal';
import Input_Text from '../../common/Input_Text';
import Dialog_Warning from '../../common/Dialog_Warning';
import { MODE } from '../../../constant/constant';
import { useDispatch } from 'react-redux';
import {
    deleteTrainingProcess,
    postTrainingProcess,
    putTrainingProcess,
} from '../../../store/employees/employee/trainingProcessSlice';
interface Props {
    onClickOK: any;
    onClickCancel: any;
    childInputItem: any;
    mode: string;
}

const Management_Employees_TrainingProcess_ChildInput: React.FC<Props> = (props: Props) => {
    const { childInputItem, mode } = props;

    const [learningProcessID, setLearningProcessID] = useState(mode !== MODE.ADD ? childInputItem.maBacDaoTao : '');
    const [learningProcessName, setLearningProcessName] = useState(mode !== MODE.ADD ? childInputItem.bacDaoTao : '');
    const [isOpenWarningDialog, setIsOpenWarningDialog] = useState(false);

    const [titleText, setTitleText] = useState('');
    const [messageID, setMessageID] = useState('');
    const [messageContent, setMessageContent] = useState('');
    const dispatch = useDispatch();
    const handleDelete = () => {
        setMessageID('DELETE');
        setMessageContent('Xóa quá trình đào tạo');
        setIsOpenWarningDialog(true);
    };

    const handleCancel = () => {
        console.log('cancel');
        props.onClickCancel();
    };

    const handleValidate = () => {
        if (!learningProcessID) {
            setIsOpenWarningDialog(true);
            setMessageID('ERROR');
            setMessageContent('Mã quá trình đào tạo chưa nhập');
            return;
        }
        setIsOpenWarningDialog(true);
        setMessageID(mode == MODE.ADD ? MODE.ADD : MODE.EDIT);
        setMessageContent(mode == MODE.ADD ? 'Thêm mới?' : 'Sửa quá trình đào tạo?');
    };

    const handleCancelWarningDialog = () => {
        console.log('close dialog');
        setIsOpenWarningDialog(false);
    };

    const handleClickOk = async () => {
        const trainingProcessObj = {
            maBacDaoTao: learningProcessID,
            bacDaoTao: learningProcessName,
        };
        if (messageID == MODE.ADD) {
            console.log(trainingProcessObj);
            await dispatch(postTrainingProcess(trainingProcessObj));
            props.onClickOK();
        } else if (messageID == MODE.EDIT) {
            console.log(trainingProcessObj);
            await dispatch(putTrainingProcess(trainingProcessObj));
            props.onClickOK();
        } else if (messageID == 'DELETE') {
            await dispatch(deleteTrainingProcess(trainingProcessObj.maBacDaoTao));
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
                title={`Quá trình đào tạo [${titleText}]`}
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
                            label="Mã chức danh"
                            value={learningProcessID}
                            onChange={(e: any) => setLearningProcessID(e.target.value)}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={6}>
                        <Input_Text
                            label="Tên chức danh"
                            value={learningProcessName}
                            onChange={(e: any) => setLearningProcessName(e.target.value)}
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

export default Management_Employees_TrainingProcess_ChildInput;
