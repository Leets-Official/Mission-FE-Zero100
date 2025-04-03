import React from "react";
import ButtonComponent from "./ButtonComponent";

function Category({ setFilter }) {
  return (
    <div className="filter-buttons">
      <ButtonComponent label="All" onClick={() => setFilter("all")} />
      <ButtonComponent label="Active" onClick={() => setFilter("active")} />
      <ButtonComponent label="Completed" onClick={() => setFilter("completed")} />
    </div>
  );
}

export default Category;