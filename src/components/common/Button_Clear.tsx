import React from 'react';
import { ClearOutlined } from '@ant-design/icons';
import { Button } from 'antd';

interface Props {
    onClick: any;
}

const Button_Clear: React.FC<Props> = (props: Props) => {
    return (
        <div className="w-12 h-12">
            <Button
                className="w-full h-full flex justify-center items-center rounded-full bg-[#B5F5EC] p-4 shadow-xl cursor-pointer scale-110 hover:border-none"
                onClick={props.onClick}
            >
                <ClearOutlined className="text-2xl text-main-color leading-none" />
            </Button>
        </div>
    );
};

export default Button_Clear;
