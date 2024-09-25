import google from '../../assets/google.png'


const GooglePlayButton = () => {
  const handlePress = () => {
    window.open('https://play.google.com/store/apps/details?id=tu.id.de.app', '_blank');
  };

  return (
    <div style={styles.container}>

    <a href="https://play.google.com/store/apps/details?id=tu.id.de.app" onClick={handlePress}>
      <img src={google} alt="Descárgala en Google Play" style={styles.image} />
    </a>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',  
  },
  image: {
    width: '200px', 
    height: 'auto',
  }
};

export default GooglePlayButton;