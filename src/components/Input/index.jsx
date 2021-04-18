import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useField } from "@unform/core";
import "./index.css";

function Input({ name, label, type = "text", ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <div className="input-component">
      {label && <label htmlFor={fieldName}>{label}</label>}
      <input
        type={type}
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        className={`form-control ${error ? "is-invalid" : ""}`}
        {...rest}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
