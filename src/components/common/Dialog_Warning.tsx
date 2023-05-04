import { Card, Col, Row } from 'antd';
import React from 'react';
import Button_Normal from './Button_Normal';

interface Props {
    messageContent: string;
    onCancel: any;
    onClickOk: any;
}

const Dialog_Warning: React.FC<Props> = (props: Props) => {
    const { messageContent } = props;

    return (
        <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center z-50 ">
            <Card
                title="Modal"
                headStyle={{ background: '#006D75', color: 'white' }}
                style={{ background: '#fff', width: '50%', height: 'fit-content', border: 'none' }}
                className="shadow-lg"
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
                <h3>{messageContent}</h3>
            </Card>
        </div>
    );
};

export default Dialog_Warning;
