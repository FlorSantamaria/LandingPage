import './styles.css';

import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';
interface IBeneficiosProps {
    icon?: string,
    text: string,
    title: string,
}

const CustomCard = styled(Card)(({ theme }) => ({
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
  borderRadius: '8px',
  transition: 'transform 0.3s, box-shadow 0.3s',
  display: 'flex', 
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.3)',
  },
  alignItems: 'center',
  justifyContent:'center',
  padding: '12px',
  marginBottom: '10px'
}));


const CustomCardComponent = (props: IBeneficiosProps) => {
  return (
    <CustomCard elevation={0}>
      <CardContent sx={{ p:0, '&:last-child': { pb: 0 }}}>
      <div className="row">
      <img 
        src={props.icon} 
        alt="Icono" 
        style={{ marginRight: '16px', width: '50px', height: '50px' }} // Tamaño del ícono
      />
      <Typography variant="body1" component="span" className='text'>
          <strong>{props.title}</strong>: {props.text}
        </Typography>
        </div>
      </CardContent>
    </CustomCard>
  );
};

export default CustomCardComponent;