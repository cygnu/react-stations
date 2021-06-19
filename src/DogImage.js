// DO NOT DELETE

import React from 'react'
import './App.css'
import PropTypes from 'prop-types'

export const DogImage = (props) => {
  return (
    <React.Fragment>
      <img src={props.url} className="cDocImage" alt="犬の画像" />
    </React.Fragment>
  );
}

DogImage.propTypes = {
  url: PropTypes.string.isRequired,
}