export default function Text({children}) {

  const textStyle = {
    fontSize: '40px',
    lineHeight: '1.6',
    margin: '10px 0',
    fontFamily: '"Lato", sans-serif',
    fontWeight: 'bold'
  };
  
  return <p style={textStyle}>{children}</p>;
  } 