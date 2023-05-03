import { Select } from 'antd';
import React from 'react';

interface Props {
    options: Array<any>;
    label: string;
    onChange: any;
    onBlur: any;
}

const Input_Select: React.FC<Props> = (props: Props) => {
    const { label, options } = props;

    return (
        <div>
            <label htmlFor="select" className={`text-main-color text-base`}>
                {label}
            </label>
            <Select defaultValue="" style={{ width: '100%' }} onChange={props.onChange} options={options} />
        </div>
    );
};

export default Input_Select;
