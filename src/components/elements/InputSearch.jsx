import React from "react";

function InputSearch({ inputValue, setInputValue }) {
  return (
    <input
      type="text"
      onChange={(event) => {
        const newValue = event.target.value;
        console.log(newValue);
        setInputValue(newValue);
      }}
      value={inputValue}
      placeholder="Search a book"
      className="form-control"
    />
  );
}

export default InputSearch;
