import { Button } from '@mui/material';

export const BlueButton = () => {
  return (
    <Button
      variant="contained"
      style={{
        backgroundColor: '#819fffff',    
        color: 'white',             
        borderRadius: '20px',       
        width: '95%',
        padding: '5px'
      }}
    >
      ¡Probala!
    </Button>
  );
};

export default BlueButton;