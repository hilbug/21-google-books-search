import React from "react";

// This file exports the Input search box and FormBtn components

export function SearchBox(props) {
  return (
    <div className="form-group">
      <input type="search" className="form-control" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "left", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}

// Week 21 Activity 5