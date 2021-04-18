import React from "react";
import PropTypes from "prop-types";
import Input from "../Input";
import "./index.css";

function FormGroupInput({ name, label, type = "text", ...rest }) {
  return (
    <div className="form-group">
      <Input name={name} label={label} type={type} {...rest} />
    </div>
  );
}
FormGroupInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
};

export default FormGroupInput;
