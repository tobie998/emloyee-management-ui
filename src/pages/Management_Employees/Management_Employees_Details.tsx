import { Col, Row } from 'antd';
import React, { useState } from 'react';
import Button_Reset from '../../components/common/Button_Reset';
import Button_Clear from '../../components/common/Button_Clear';
import Search from 'antd/es/input/Search';
import Button_Add from '../../components/common/Button_Add';
import { SearchOutlined } from '@ant-design/icons';
import Management_Employees_Details_Table from '../../components/Management_Employees/Details/Management_Employees_Details_Table';
import Management_Employees_Details_ChildInput from '../../components/Management_Employees/Details/Management_Employees_Details_ChildInput';

const Management_EmployeesDetails: React.FC = () => {
    const [isChildInputOpen, setIsChildInputOpen] = useState(false);

    const handleReset = () => {
        console.log('reset');
    };

    const handleClear = () => {
        console.log('clear');
    };

    const handleAdd = () => {
        console.log('add');
        setIsChildInputOpen((previous) => !previous);
    };

    const onSearch = (value: string) => console.log(value);

    const handleEdit = (record: any) => {
        console.log('edit', record);
    };

    const handleInfo = (record: any) => {
        console.log('info', record);
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
                    <Management_Employees_Details_Table
                        onEdit={handleEdit}
                        onInfo={(event: any) => handleInfo(event)}
                    />
                </Col>
            </Row>

            {isChildInputOpen ? <Management_Employees_Details_ChildInput /> : ''}
        </div>
    );
};

export default Management_EmployeesDetails;
