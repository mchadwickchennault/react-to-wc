import { Button, type ButtonProps } from '@carbon/react';

import React from 'react';

type TracerButtonProps = {
 } extends ButtonProps<'button'> ? ButtonProps<'button'> : never;

const style: React.CSSProperties = {
    borderRadius: '20px'
};

export const TracerButton = (props: TracerButtonProps) => {
    const newProps = { ...props, style: { ...props.style, ...style}}
    return <Button {...newProps} />;
};
