import { DatePicker, DatePickerProps } from 'antd';
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

interface Props {
    label: string;
    onChange: DatePickerProps['onChange'];
    onBlur: any;
    value?: string;
    picker?: any;
    disabled?: any;
}

const Input_DatePicker: React.FC<Props> = (props: Props) => {
    const { label, value, picker, disabled } = props;

    const handleFormat = () => {
        switch (picker) {
            case 'year':
                return 'YYYY';
            default:
                break;
        }
    };

    return (
        <div className="flex flex-col">
            <label htmlFor="datePicker" className={`text-main-color text-base`}>
                {label}
            </label>
            <DatePicker
                onChange={props.onChange}
                onBlur={props.onBlur}
                value={value ? dayjs(value?.toString(), handleFormat()) : undefined}
                picker={picker}
                disabled={disabled}
            />
        </div>
    );
};

export default Input_DatePicker;
