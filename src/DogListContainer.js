// DO NOT DELETE

import React from 'react'
import { BreedsSelect } from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = React.useState([]);
  const [selectedBreed, setSelectedBreed] = React.useState('');

  React.useEffect(() => {
      fetch('https://dog.ceo/api/breeds/list/all')
        .then(res => res.json())
        .then(res => setBreeds(Object.keys(res.message)))
    }, []
  );

  return(
    <BreedsSelect
      breeds={breeds}
      selectedBreed={selectedBreed}
      setSelectedBreed={setSelectedBreed}
    />
  );
}