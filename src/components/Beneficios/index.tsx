// import React from 'react';
import './styles.css';

import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useMediaQuery } from "react-responsive";

interface IBeneficiosProps {
    icon?: string,
    text: string,
    title?: string,
}

const CustomCard = styled(Card)(({ }) => ({
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
  borderRadius: '8px',
  transition: 'transform 0.3s, box-shadow 0.3s',
  // display: 'flex', 
  '&:hover': {
    transform: 'scale(1)',
    boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.3)',
  },
  alignItems: 'center',
  justifyContent:'center',
  padding: '10px',
  marginBottom: '10px',
  backgroundColor: 'white',
  width: '100%',
}));


const CustomCardComponent = (props: IBeneficiosProps) => {
const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div style={{paddingLeft: '10px', paddingRight: '10px'}}>

    <CustomCard elevation={0} style={{minHeight: isMobile? undefined : '150px',width: isMobile ? '92%' : '100%'}}>
      <CardContent sx={{ p:0, '&:last-child': { pb: 0 }}}>
      <div className="row">
      <img 
        src={props.icon} 
        alt="Icono" 
        style={{ marginRight: '16px', width: '70px', height: '70px' }} // Tamaño del ícono
      />
      <Typography variant="body1" component="span" className='text'>
          <strong>{props.title}</strong> {props.text}
        </Typography>
        </div>
      </CardContent>
    </CustomCard>
    </div>
  );
};

export default CustomCardComponent;