import { Input } from 'antd';
import React from 'react';

interface Props {
    value: string;
    label: string;
    disabled?: boolean;
    onChange: any;
    onBlur: any;
}

const Input_Text: React.FC<Props> = (props: Props) => {
    const { value, label, disabled } = props;

    return (
        <div>
            <label htmlFor="text" className={`text-main-color text-base`}>
                {label}
            </label>
            <Input placeholder="" value={value} onChange={props.onChange} onBlur={props.onBlur} disabled={disabled} />
        </div>
    );
};

export default Input_Text;
