// DO NOT DELETE

import React from 'react'
import { BreedsSelect } from './BreedsSelect'
import { DogImage } from './DogImage'

export const DogListContainer = () => {
  const [breeds, setBreeds] = React.useState([]);
  const [selectedBreed, setSelectedBreed] = React.useState('');
  const [dogImagesList, setDogImagesList] = React.useState([]);

  React.useEffect(() => {
      fetch('https://dog.ceo/api/breeds/list/all')
        .then(res => res.json())
        .then(res => setBreeds(Object.keys(res.message)))
    }, []
  );

  const getDogImagesList = async () => {
    const result = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`)
      .then(res => res.json())
      .then(data => data.message);
    setDogImagesList(result);
  }

  return(
    <React.Fragment>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        setSelectedBreed={setSelectedBreed}
        getDogImagesList={getDogImagesList}
      />
      <ul className="docImagesList" >
        {dogImagesList.map((dogImageList, index) => (
          <li key={index} className="docImageList" >
            <DogImage url={dogImageList} />
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}