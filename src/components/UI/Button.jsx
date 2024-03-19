import React,   { memo } from "react";
import { Button as BButton } from 'react-bootstrap';

export const Button = memo(({ onClick, children, ...props }) => {
    return (
        <BButton onClick={onClick} {...props}>
            {children}
        </BButton>
    );
}); 