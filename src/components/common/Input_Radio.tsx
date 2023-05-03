import { Radio } from 'antd';
import React from 'react';

interface Props {
    value: string;
    label: string;
    onChange: any;
    radioValue: Array<any>;
}

const Input_Radio: React.FC<Props> = (props: Props) => {
    const { label, value, radioValue } = props;

    return (
        <div>
            <label htmlFor="radio" className={`text-main-color text-base`}>
                {label}
            </label>
            <Radio.Group onChange={props.onChange} value={value} className='mt-2'>
                {radioValue.map((item: any) => (
                    <Radio value={item.value} key={item.value}>
                        {item.name}
                    </Radio>
                ))}
            </Radio.Group>
        </div>
    );
};

export default Input_Radio;
