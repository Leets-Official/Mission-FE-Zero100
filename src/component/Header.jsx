import React from "react";
import TextComponent from "./TextComponent";

function Header() {
  return (
    <div className="header">
      <h1>
        <TextComponent text="TodoMatic" />
      </h1>
      <h2>
        <TextComponent text="What needs to be done?" />
      </h2>
    </div>
  );
}

export default Header;