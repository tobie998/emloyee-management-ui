import { Col, Row } from 'antd';
import React from 'react';
import Button_Reset from '../../components/common/Button_Reset';
import Button_Clear from '../../components/common/Button_Clear';
import Search from 'antd/es/input/Search';
import Button_Add from '../../components/common/Button_Add';
import { SearchOutlined } from '@ant-design/icons';
import Management_Employees_Details_Table from '../../components/Management_Employees/Details/Management_Employees_Details_Table';

const Management_EmployeesDetails: React.FC = () => {
    const handleReset = () => {
        console.log('reset');
    };

    const handleClear = () => {
        console.log('clear');
    };

    const handleAdd = () => {
        console.log('add');
    };

    const onSearch = (value: string) => console.log(value);

    return (
        <div>
            <Row gutter={[8, 0]} className="mb-12">
                <Col span={1} className="mr-8">
                    <Button_Reset onClick={handleReset} />
                </Col>

                <Col span={1}>
                    <Button_Clear onClick={handleClear} />
                </Col>
            </Row>

            <Row className="justify-between items-center mb-12">
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
                    <Management_Employees_Details_Table />
                </Col>
            </Row>
        </div>
    );
};

export default Management_EmployeesDetails;
