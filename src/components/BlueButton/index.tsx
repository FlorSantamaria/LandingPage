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
        marginBottom: '10px',
        marginTop: '5px',
        width: '100%'
      }}
    >
      ¡Probala!
    </Button>
  );
};

export default BlueButton;