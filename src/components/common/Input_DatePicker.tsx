import { DatePicker, DatePickerProps } from 'antd';
import React from 'react';

interface Props {
    label: string;
    onChange: DatePickerProps['onChange'];
    onBlur: any;
}

const Input_DatePicker: React.FC<Props> = (props: Props) => {
    const { label } = props;
    return (
        <div className="flex flex-col">
            <label htmlFor="datePicker" className={`text-main-color text-base`}>
                {label}
            </label>
            <DatePicker onChange={props.onChange} onBlur={props.onBlur} />
        </div>
    );
};

export default Input_DatePicker;
