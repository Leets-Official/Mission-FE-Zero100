function Heading({ text, level = 1 }) {
    const Tag = `h${level}`;
    return <Tag>{text}</Tag>;
  }
  
  export default Heading;
  