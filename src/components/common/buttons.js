import React from 'react';
import Button from 'react-bootstrap/Button';


export const CommonButton = ({variant, handleClick, description, icon, link}) => (
<Button variant={variant} onClick={handleClick}>{icon} {description} {link}</Button>
);