import { Col, Row } from 'antd';
import React, { useState } from 'react';
import Button_Reset from '../../components/common/Button_Reset';
import Button_Clear from '../../components/common/Button_Clear';
import Search from 'antd/es/input/Search';
import Button_Add from '../../components/common/Button_Add';
import { SearchOutlined } from '@ant-design/icons';
import Management_Employees_Punishment_Table from '../../components/Management_Employees/Punishment/Management_Employees_Punishment_Table';
import Management_Employees_Punishment_ChildInput from '../../components/Management_Employees/Punishment/Management_Employees_Punishment_ChildInput';

const Management_Employees_Punishment = () => {
    const [isChildInputOpen, setIsChildInputOpen] = useState(false);
    const handleReset = () => {
        console.log('reset');
    };

    const handleClear = () => {
        console.log('clear');
    };

    const handleAdd = () => {
        console.log('add');
        setIsChildInputOpen(true);
    };

    const onSearch = (value: string) => console.log(value);

    const handleEdit = (record: any) => {
        console.log('edit', record);
    };

    const handleInfo = (record: any) => {
        console.log('info', record);
    };

    const handleClickCancel = () => {
        setIsChildInputOpen(false);
    };

    const handleClickOk = () => {
        setIsChildInputOpen(false);
    };
    return (
        <div>
            <Row gutter={[8, 0]} className="mb-10">
                <Col span={1} className="mr-8">
                    <Button_Reset onClick={handleReset} />
                </Col>

                <Col span={1}>
                    <Button_Clear onClick={handleClear} />
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

                <Col span={1}>
                    <Button_Add onClick={handleAdd} />
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <Management_Employees_Punishment_Table
                        onEdit={handleEdit}
                        onInfo={(event: any) => handleInfo(event)}
                    />
                </Col>
            </Row>

            {isChildInputOpen ? (
                <Management_Employees_Punishment_ChildInput
                    onClickCancel={handleClickCancel}
                    onClickOK={handleClickOk}
                />
            ) : (
                ''
            )}
        </div>
    );
};

export default Management_Employees_Punishment;
