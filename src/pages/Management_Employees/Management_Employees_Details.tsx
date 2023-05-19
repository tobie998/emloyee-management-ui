import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import Button_Reset from '../../components/common/Button_Reset';
import Button_Clear from '../../components/common/Button_Clear';
import Search from 'antd/es/input/Search';
import Button_Add from '../../components/common/Button_Add';
import { SearchOutlined } from '@ant-design/icons';
import Management_Employees_Details_Table from '../../components/Management_Employees/Details/Management_Employees_Details_Table';
import Management_Employees_Details_ChildInput from '../../components/Management_Employees/Details/Management_Employees_Details_ChildInput';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployee } from '../../store/employees/details/detailSlice';

const Management_EmployeesDetails: React.FC = () => {
    const [isChildInputOpen, setIsChildInputOpen] = useState(false);
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const employeeList = useSelector((state: any) => state.employee);
    const [childInputItem, setChildInputItem] = useState({});
    const [childMode, setChildMode] = useState('add');

    useEffect(() => {
        const dataTable = employeeList.employeeDetailList.map((item: any, index: any) => {
            return { ...item, key: index + 1, gioitinh: item.gioitinh ? 'nam' : 'nữ' };
        });
        setData(dataTable);
    }, [employeeList]);

    const handleReset = () => {
        console.log('reset');
        getEmployeeList();
    };

    const handleClear = () => {
        console.log('clear');
    };

    const handleAdd = () => {
        console.log('add');
        setChildMode('add');
        setIsChildInputOpen(true);
    };

    const onSearch = (value: string) => console.log(value);

    const handleEdit = (record: any) => {
        console.log('edit', record);
        setChildInputItem(record);
        setChildMode('edit');
        setIsChildInputOpen(true);
    };

    const handleInfo = (record: any) => {
        console.log('info', record);
        setChildInputItem(record);
        setChildMode('info');
        setIsChildInputOpen(true);
    };

    const handleClickCancel = () => {
        setIsChildInputOpen(false);
    };

    const handleClickOk = () => {
        setIsChildInputOpen(false);
    };

    const getEmployeeList = () => {
        dispatch(getEmployee());
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
                        data={data}
                        onEdit={handleEdit}
                        onInfo={(event: any) => handleInfo(event)}
                    />
                </Col>
            </Row>

            {isChildInputOpen ? (
                <Management_Employees_Details_ChildInput
                    onClickCancel={handleClickCancel}
                    onClickOK={handleClickOk}
                    mode={childMode}
                    childInputItem={childInputItem}
                />
            ) : (
                ''
            )}
        </div>
    );
};

export default Management_EmployeesDetails;
