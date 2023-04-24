import React from 'react';
import { ReloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';

interface Props {
    onClick: any;
}

const Button_Reset: React.FC<Props> = (props: Props) => {
    return (
        <div className="w-12 h-12">
            <Button
                className="w-full h-full flex justify-center items-center rounded-full bg-[#006D75] p-4 shadow-xl cursor-pointer scale-110 hover:border-none"
                onClick={props.onClick}
            >
                <ReloadOutlined className="text-2xl text-white leading-none" />
            </Button>
        </div>
    );
};

export default Button_Reset;
