import { useState } from "react";

function Text() {
  const [text, setText] = useState("");

  return (
    <div>
      <h3>일정 입력:</h3>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="일정을 입력하세요..."
        rows="3"
        
      />
    </div>
  );
}

export default Text;