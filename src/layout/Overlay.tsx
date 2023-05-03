import React from 'react';

interface Props {
    children: React.ReactNode;
}

const Overlay: React.FC<Props> = (props: Props) => {
    const { children } = props;
    return (
        <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center z-50 backdrop-brightness-50">
            {children}
        </div>
    );
};

export default Overlay;
