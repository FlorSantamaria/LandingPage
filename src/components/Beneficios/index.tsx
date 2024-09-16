import React from 'react';
import './styles.css';

interface IBeneficiosProps {
    icon: string,
    text: string,
    title: string,
}

export const BeneficiosComponent = (props:IBeneficiosProps ) => {
  return (
    <div className="benefit-box">
      <img src={props.icon} alt="Icono" className="benefit-icon" />
      <p className="benefit-text"><strong>{props.title}</strong> {props.text}</p>
    </div>
  );
};