import { Button } from 'antd';
import React from 'react';

interface Props {
    label: string;
    btnColor?: string;
    textColor?: string;
    onClick: any;
}

const Button_Normal: React.FC<Props> = (props: Props) => {
    const { label, btnColor, textColor } = props;
    return (
        <div>
            <Button
                style={{
                    background: `${btnColor ? `${btnColor}` : '#006D75'}`,
                    color: `${textColor ? `${textColor}` : '#fff'}`,
                }}
                className="w-full h-10"
                onClick={props.onClick}
            >
                {label}
            </Button>
        </div>
    );
};

export default Button_Normal;
