import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import Button_Reset from '../../components/common/Button_Reset';
import Button_Clear from '../../components/common/Button_Clear';
import Search from 'antd/es/input/Search';
import Button_Add from '../../components/common/Button_Add';
import { SearchOutlined } from '@ant-design/icons';
import Management_Employees_ResearchCategory_Table from '../../components/Management_Employees/Research_Category/Management_Employees_ResearchCategory_Table';
import Management_Employees_ResearchCategory_ChildInput from '../../components/Management_Employees/Research_Category/Management_Employees_ResearchCategory_ChildInput';
import { useDispatch, useSelector } from 'react-redux';
import { MODE } from '../../constant/constant';
import { getResearchCategory } from '../../store/employees/employee/researchCategorySlice';

const Management_Employees_ResearchCategory = () => {
    const [isChildInputOpen, setIsChildInputOpen] = useState(false);
    const [searchedText, setSearchedText] = useState('');
    const [dataTable, setDataTable] = useState([]);
    const dispatch = useDispatch();
    const researchCategoryList = useSelector((state: any) => state.researchCategory.researchCategoryList);
    const [childInputItem, setChildInputItem] = useState({});
    const [childMode, setChildMode] = useState(MODE.ADD);

    useEffect(() => {
        if (researchCategoryList) {
            // const dataTable = givenDegreeList.map((item: any, index: any) => {
            //     return { ...item, key: index + 1, gioitinh: item.gioitinh ? true : false };
            // });
            setDataTable(researchCategoryList);
        }
    }, [researchCategoryList]);

    const handleReset = () => {
        console.log('reset');
        getResearchCategoryList();
    };

    const handleClear = () => {
        console.log('clear');
    };

    const handleAdd = () => {
        console.log('add');
        setIsChildInputOpen(true);
        setChildMode(MODE.ADD);
    };

    const onSearch = (value: string) => console.log(value);

    const handleEdit = (record: any) => {
        setChildInputItem(record);
        setChildMode(MODE.EDIT);
        setIsChildInputOpen(true);
    };

    const handleInfo = (record: any) => {
        setChildInputItem(record);
        setChildMode(MODE.INFO);
        setIsChildInputOpen(true);
    };

    const handleClickCancel = () => {
        setIsChildInputOpen(false);
    };

    const handleClickOk = () => {
        setIsChildInputOpen(false);
        getResearchCategoryList();
    };

    const getResearchCategoryList = () => {
        dispatch(getResearchCategory());
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
                    <Management_Employees_ResearchCategory_Table
                        dataTable={dataTable}
                        searchedText={searchedText}
                        onEdit={handleEdit}
                        onInfo={(event: any) => handleInfo(event)}
                    />
                </Col>
            </Row>

            {isChildInputOpen ? (
                <Management_Employees_ResearchCategory_ChildInput
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

export default Management_Employees_ResearchCategory;
