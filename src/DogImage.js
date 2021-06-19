// DO NOT DELETE

import React from 'react'
import PropTypes from 'prop-types'

export const DogImage = ({ url }) => {
  return <img src={url} className="docImage" />;
}

DogImage.propTypes = {
  url: PropTypes.string.isRequired,
}