import React from "react";
import PropTypes from "prop-types";

function Text({ format, title, children, position, ...rest }) {
  return (
    <div className="text-component">
      <h3 className={`${format}`}>{title}</h3>
      <p className={`${position}`} {...rest}>
        {children}
      </p>
    </div>
  );
}

Text.propTypes = {
  format: PropTypes.string,
  title: PropTypes.any,
  children: PropTypes.any,
  position: PropTypes.string,
};

export default Text;
