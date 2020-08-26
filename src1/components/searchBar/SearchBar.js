import React, { useState, useEffect, useRef } from "react";
// import { Paper, TextField } from "@material-ui/core";
import "./searchBar.css";

export default ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = event => setSearchTerm(event.target.value);

  const onKeyPress = event => {
    if (event.key === "Enter") {
      onSubmit(searchTerm);
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        onChange={handleChange}
        onKeyPress={onKeyPress}
        value={searchTerm}
        ref={inputRef}
      />
      <div className="input-group-append">
        <button
          className="btn btn-light"
          type="submit"
          onClick={() => onSubmit(searchTerm)}
        >
          Go
        </button>
      </div>
    </div>
  );
};
