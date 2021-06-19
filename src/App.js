// DO NOT DELETE

import React from 'react'
import { Header } from './Header'
import { Description } from './Description'
import { DogListContainer } from './DogListContainer'
import './reset.css'
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Description />
      <DogListContainer />
    </React.Fragment>
  );
}
