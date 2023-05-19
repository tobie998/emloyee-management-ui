import { DatePicker, DatePickerProps } from 'antd';
import React from 'react';
import moment from 'moment';
import dayjs from 'dayjs';

interface Props {
    label: string;
    onChange: DatePickerProps['onChange'];
    onBlur: any;
    value?: string;
    picker?: any;
}

const Input_DatePicker: React.FC<Props> = (props: Props) => {
    const { label, value, picker } = props;
    return (
        <div className="flex flex-col">
            <label htmlFor="datePicker" className={`text-main-color text-base`}>
                {label}
            </label>
            <DatePicker onChange={props.onChange} onBlur={props.onBlur} defaultValue={dayjs(value)} picker={picker} />
        </div>
    );
};

export default Input_DatePicker;
