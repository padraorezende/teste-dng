import React from "react";
import PropTypes from "prop-types";
import "./index.css";

function Progress({ children, ...rest }) {
  return (
    <div className="skill">
      <span>{children}</span>
      <div className="progress">
        <div className="determinate" {...rest}></div>
      </div>
    </div>
  );
}

Progress.propTypes = {
  children: PropTypes.any,
};

export default Progress;
