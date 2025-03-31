export default function Button({onClick, children}) {
    const buttonStyle = {
        border:'none',
        borderRadius: '6px',
        padding: '5px 3px',
        margin: '5px 3px',
        width: '150px',
    };

    return (
      <button style={buttonStyle} onClick={onClick}>{children}</button>
    );
  }