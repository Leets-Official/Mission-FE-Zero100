import TextComponent from "./TextComponent";

function Header() {
  return (
    <div className="header">
      <TextComponent text="TodoMatic" type="title" />
      <TextComponent text="What needs to be done?" type="subTitle" />
    </div>
  );
}

export default Header;