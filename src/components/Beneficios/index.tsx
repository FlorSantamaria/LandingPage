import React from 'react';
import './styles.css';
import { Card, CardContent } from '@mui/material';

interface IBeneficiosProps {
    icon: string,
    text: string,
    title: string,
}

export const BeneficiosComponent = (props: IBeneficiosProps) => {
  return (
    <Card elevation={3} className="benefit-box">
      <CardContent>
        <div className="row">
          <img src={props.icon} alt="Icono" className="benefit-icon" />
          <p className="benefit-text">
            <strong>{props.title}</strong> {props.text}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};