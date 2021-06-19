// DO NOT DELETE

import React from 'react'
import PropTypes from 'prop-types'

export const BreedsSelect = (props) => {
  return(
    <select value={props.selectedBreed} onChange={e => props.setSelectedBreed(e.target.value)}>
      <option value="">Select</option>
      {props.breeds.map(breed => (
        <option key={breed} value={breed} >{breed}</option>
      ))}
    </select>
  );
}

BreedsSelect.propTypes = {
  breeds: PropTypes.array.isRequired,
  selectedBreed: PropTypes.string.isRequired,
  setSelectedBreed: PropTypes.func.isRequired,
}