function TextComponent({ text, type }) {
 
  const style = {
    fontSize: type === "title" ? "2rem" : "1.5rem", 
    fontWeight: type === "title" ? "bold" : "normal", 
  };

  return <span style={style}>{text}</span>;
}

export default TextComponent;