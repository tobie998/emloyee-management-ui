import React, { useEffect, useState } from 'react';
import Overlay from '../../../layout/Overlay';
import { Card, Col, Row } from 'antd';
import Button_Normal from '../../common/Button_Normal';
import Input_Text from '../../common/Input_Text';
import Dialog_Warning from '../../common/Dialog_Warning';
import Input_Select from '../../common/Input_Select';
import { researchCategoryList } from '../../../constant/dummy';
import { MODE } from '../../../constant/constant';
import { useDispatch } from 'react-redux';
import {
    deleteResearchMajor,
    postResearchMajor,
    putResearchMajor,
} from '../../../store/employees/employee/researchMajorSlice';
interface Props {
    onClickOK: any;
    onClickCancel: any;
    childInputItem: any;
    mode: string;
}

const Management_Employees_ResearchMajor_ChildInput: React.FC<Props> = (props: Props) => {
    const { childInputItem, mode } = props;

    const [researchMajorID, setResearchMajorID] = useState(mode !== MODE.ADD ? childInputItem.machuyennganh : '');
    const [researchMajorName, setResearchMajorName] = useState(mode !== MODE.ADD ? childInputItem.tenchuyennganh : '');
    const [researchCategory, setResearchCategory] = useState(mode !== MODE.ADD ? childInputItem.malinhvuc : '');
    const [isOpenWarningDialog, setIsOpenWarningDialog] = useState(false);

    const [titleText, setTitleText] = useState('');
    const [messageID, setMessageID] = useState('');
    const [messageContent, setMessageContent] = useState('');
    const dispatch = useDispatch();
    const handleDelete = () => {
        setMessageID('DELETE');
        setMessageContent('Xóa chuyên ngành KH&CN?');
        setIsOpenWarningDialog(true);
    };

    const handleCancel = () => {
        console.log('cancel');
        props.onClickCancel();
    };

    const handleValidate = () => {
        if (!researchMajorID) {
            setIsOpenWarningDialog(true);
            setMessageID('ERROR');
            setMessageContent('Mã chuyên ngành KH&CN chưa nhập');
            return;
        }
        setIsOpenWarningDialog(true);
        setMessageID(mode == MODE.ADD ? MODE.ADD : MODE.EDIT);
        setMessageContent(mode == MODE.ADD ? 'Thêm mới?' : 'Sửa chuyên ngành KH&CN?');
    };

    const handleCancelWarningDialog = () => {
        console.log('close dialog');
        setIsOpenWarningDialog(false);
    };

    const handleClickOk = async () => {
        const researchMajorObj = {
            machuyennganh: researchMajorID,
            matenchuyennganh: researchMajorName,
            malinhvuc: researchCategory,
        };
        if (messageID == MODE.ADD) {
            console.log(researchMajorObj);
            await dispatch(postResearchMajor(researchMajorObj));
            props.onClickOK();
        } else if (messageID == MODE.EDIT) {
            console.log(researchMajorObj);
            await dispatch(putResearchMajor(researchMajorObj));
            props.onClickOK();
        } else if (messageID == 'DELETE') {
            await dispatch(deleteResearchMajor(researchMajorObj.machuyennganh));
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
                title={`Chuyên ngành KH&CN [${titleText}]`}
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
                        <Input_Text
                            label="Mã chuyên ngành"
                            value={researchMajorID}
                            onChange={(e: any) => setResearchMajorID(e.target.value)}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={6}>
                        <Input_Text
                            label="Tên chuyên ngành"
                            value={researchMajorName}
                            onChange={(e: any) => setResearchMajorName(e.target.value)}
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

export default Management_Employees_ResearchMajor_ChildInput;
