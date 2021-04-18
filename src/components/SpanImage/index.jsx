import React from "react";
import PropTypes from "prop-types";

function SpanImage({ name, endereco, ...rest }) {
  return <img src={endereco} alt={name} {...rest} />;
}

SpanImage.propTypes = {
  name: PropTypes.any,
  endereco: PropTypes.string.isRequired,
};

export default SpanImage;
