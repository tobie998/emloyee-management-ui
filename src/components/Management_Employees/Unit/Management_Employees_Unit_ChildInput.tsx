import React, { useEffect, useState } from 'react';
import Overlay from '../../../layout/Overlay';
import { Card, Col, Row } from 'antd';
import Button_Normal from '../../common/Button_Normal';
import Input_Text from '../../common/Input_Text';
import Dialog_Warning from '../../common/Dialog_Warning';
import Input_Number from '../../common/Input_Number';
import { MODE } from '../../../constant/constant';
import { useDispatch } from 'react-redux';
import { deleteUnit, postUnit, putUnit } from '../../../store/employees/employee/unitSlice';
interface Props {
    onClickOK: any;
    onClickCancel: any;
    childInputItem: any;
    mode: string;
}

const Management_Employees_Unit_ChildInput: React.FC<Props> = (props: Props) => {
    const { childInputItem, mode } = props;

    const [unitID, setUnitID] = useState(mode !== MODE.ADD ? childInputItem.maDonVi : '');
    const [unitName, setUnitName] = useState(mode !== MODE.ADD ? childInputItem.tenDonVi : '');
    const [unitAddress, setUnitAddress] = useState(mode !== MODE.ADD ? childInputItem.diaChi : '');
    const [unitFax, setUnitFax] = useState(mode !== MODE.ADD ? childInputItem.fax : '');
    const [unitLeader, setUnitLeader] = useState(mode !== MODE.ADD ? childInputItem.nguoiDungDau : '');
    const [unitPhone, setUnitPhone] = useState(mode !== MODE.ADD ? childInputItem.dienThoai : '');
    const [unitWebsite, setUnitWebsite] = useState(mode !== MODE.ADD ? childInputItem.website : '');
    const [isOpenWarningDialog, setIsOpenWarningDialog] = useState(false);

    const [titleText, setTitleText] = useState('');
    const [messageID, setMessageID] = useState('');
    const [messageContent, setMessageContent] = useState('');
    const dispatch = useDispatch();

    const handleDelete = () => {
        setMessageID('DELETE');
        setMessageContent('Xóa đơn vị');
        setIsOpenWarningDialog(true);
    };

    const handleCancel = () => {
        console.log('cancel');
        props.onClickCancel();
    };

    const handleValidate = () => {
        if (!unitID) {
            setIsOpenWarningDialog(true);
            setMessageID('ERROR');
            setMessageContent('Mã đơn vị chưa nhập');
            return;
        }
        setIsOpenWarningDialog(true);
        setMessageID(mode == MODE.ADD ? MODE.ADD : MODE.EDIT);
        setMessageContent(mode == MODE.ADD ? 'Thêm mới?' : 'Sửa đơn vị?');
    };

    const handleCancelWarningDialog = () => {
        console.log('close dialog');
        setIsOpenWarningDialog(false);
    };

    const handleClickOk = async () => {
        const unitObj = {
            maDonVi: 'string',
            tenDonVi: 'string',
            diaChi: 'string',
            fax: 'string',
            nguoiDungDau: 'string',
            dienThoai: 'string',
            website: 'string',
        };
        if (messageID == MODE.ADD) {
            console.log(unitObj);
            await dispatch(postUnit(unitObj));
            props.onClickOK();
        } else if (messageID == MODE.EDIT) {
            console.log(unitObj);
            await dispatch(putUnit(unitObj));
            props.onClickOK();
        } else if (messageID == 'DELETE') {
            await dispatch(deleteUnit(unitObj.maDonVi));
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
                title={`Đơn vị [${titleText}]`}
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
                            label="Mã đơn vị"
                            value={unitID}
                            onChange={(e: any) => setUnitID(e.target.value)}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={6}>
                        <Input_Text
                            label="Tên đơn vị"
                            value={unitName}
                            onChange={(e: any) => setUnitName(e.target.value)}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={6}>
                        <Input_Text
                            label="Địa chỉ"
                            value={unitAddress}
                            onChange={(e: any) => setUnitAddress(e.target.value)}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={6}>
                        <Input_Number
                            label="Fax"
                            value={unitFax}
                            onChange={(e: any) => setUnitFax(e.target.value)}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={6}>
                        <Input_Text
                            label="Người đứng đầu"
                            value={unitLeader}
                            onChange={(e: any) => setUnitLeader(e.target.value)}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={6}>
                        <Input_Number
                            label="Điện thoại"
                            value={unitPhone}
                            onChange={(e: any) => setUnitPhone(e.target.value)}
                            onBlur={() => console.log('onBlur')}
                        />
                    </Col>

                    <Col span={6}>
                        <Input_Text
                            label="Website"
                            value={unitWebsite}
                            onChange={(e: any) => setUnitWebsite(e.target.value)}
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

export default Management_Employees_Unit_ChildInput;
