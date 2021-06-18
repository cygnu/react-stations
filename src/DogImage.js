// DO NOT DELETE

import React from 'react'
import './App.css'

export const DogImage = (props) => {
  return (
    <React.Fragment>
      <img src={props.url} className="cDocImage" alt="犬の画像" />
    </React.Fragment>
  );
}
