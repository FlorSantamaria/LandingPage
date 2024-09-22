import { Button } from '@mui/material';

export const BlueButton = () => {
  return (
    <Button
      variant="contained"
      style={{
        backgroundColor: '#819fffff',    
        color: 'white',             
        borderRadius: '20px',       
        padding: '10px 20px',       
      }}
    >
      ¡Probala!
    </Button>
  );
};

export default BlueButton;