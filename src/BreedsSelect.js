// DO NOT DELETE

import React from 'react'
import PropTypes from 'prop-types'

export const BreedsSelect = (props) => {
  return(
    <div className="breedsSelect">
      <p className="bSParagraph">Breeds List</p>
      <div className="bSContainer">
        <select
          value={props.selectedBreed}
          onChange={e => props.setSelectedBreed(e.target.value)}
          className="bsDropDown"
        >
          <option value="">Select</option>
          {props.breeds.map(breed => (
            <option key={breed} value={breed}>{breed}</option>
          ))}
        </select>
      </div>
      <button
        className="bSButton"
        onClick={props.getDogImagesList}
      >表 示</button>
    </div>
  );
}

BreedsSelect.propTypes = {
  breeds: PropTypes.array.isRequired,
  selectedBreed: PropTypes.string.isRequired,
  setSelectedBreed: PropTypes.func.isRequired,
  getDogImagesList: PropTypes.func.isRequired,
}