import React from "react";
import PropTypes from "prop-types";
import "./index.css";

function Button({ type = "button", children, color, ...rest }) {
  return (
    <div className="button-component">
      <button type={type} className={`btn btn-${color}`} {...rest}>
        {children}
      </button>
    </div>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.any,
  color: PropTypes.string.isRequired,
};

export default Button;
