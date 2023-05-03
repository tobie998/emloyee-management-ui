import { Input, InputNumber } from 'antd';
import React from 'react';

interface Props {
    value: string;
    label: string;
    onChange: any;
    onBlur: any;
}

const Input_Number: React.FC<Props> = (props: Props) => {
    const { value, label } = props;

    return (
        <div className="flex flex-col">
            <label htmlFor="text" className={`text-main-color text-base`}>
                {label}
            </label>
            <InputNumber
                className="w-full"
                placeholder=""
                value={value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    );
};

export default Input_Number;
