import { Button, type ButtonProps } from '@carbon/react';

import React from 'react';
import './tracer-button.scss'

interface BaseButtonProps {
    text: string;
};


type TracerButtonProps = BaseButtonProps extends ButtonProps<'button'> ? ButtonProps<'button'> : BaseButtonProps;



export const TracerButton = (props: TracerButtonProps) => {
    return <Button {...props} buttonClassName='tracer-button'>{props.text}</Button>;
};
