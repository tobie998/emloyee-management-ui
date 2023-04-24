import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React from 'react';

interface Props {
    onClick: any;
}

const Button_Add: React.FC<Props> = (props: Props) => {
    return (
        <div className="w-12 h-12">
            <Button
                className="w-full h-full flex justify-center items-center rounded-full bg-[#36CFC9] p-4 shadow-xl cursor-pointer scale-110 hover:border-none"
                onClick={props.onClick}
            >
                <PlusOutlined className="text-2xl text-white leading-none" />
            </Button>
        </div>
    );
};

export default Button_Add;
