import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import Button_Reset from '../../components/common/Button_Reset';
import Button_Clear from '../../components/common/Button_Clear';
import Search from 'antd/es/input/Search';
import Button_Add from '../../components/common/Button_Add';
import { SearchOutlined } from '@ant-design/icons';
import Management_Employees_Reward_Table from '../../components/Management_Employees/Reward/Management_Employees_Reward_Table';
import Management_Employees_Reward_ChildInput from '../../components/Management_Employees/Reward/Management_Employees_Reward_ChildInput';
import { useDispatch, useSelector } from 'react-redux';
import { MODE } from '../../constant/constant';
import { getReward } from '../../store/employees/employee/rewardSlice';

const Management_Employees_Reward = () => {
    const [isChildInputOpen, setIsChildInputOpen] = useState(false);
    const [searchedText, setSearchedText] = useState('');
    const [dataTable, setDataTable] = useState([]);
    const dispatch = useDispatch();
    const rewardList = useSelector((state: any) => state.reward.rewardList);
    const [childInputItem, setChildInputItem] = useState({});
    const [childMode, setChildMode] = useState(MODE.ADD);

    useEffect(() => {
        if (rewardList) {
            // const dataTable = givenDegreeList.map((item: any, index: any) => {
            //     return { ...item, key: index + 1, gioitinh: item.gioitinh ? true : false };
            // });
            setDataTable(rewardList);
        }
    }, [rewardList]);
    
    const handleReset = () => {
        console.log('reset');
        getRewardList();
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
        getRewardList();
    };

    const getRewardList = () => {
        dispatch(getReward());
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
                    <Management_Employees_Reward_Table
                        dataTable={dataTable}
                        searchedText={searchedText}
                        onEdit={handleEdit}
                        onInfo={(event: any) => handleInfo(event)}
                    />
                </Col>
            </Row>

            {isChildInputOpen ? (
                <Management_Employees_Reward_ChildInput
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

export default Management_Employees_Reward;
