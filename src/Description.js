// DO NOT DELETE

import React from 'react'
import { DogImage } from './DogImage'
import './App.css'

export const Description = () => {
  const initialState = "https://images.dog.ceo/breeds/akita/Akita_inu_blanc.jpg";
  const [docUrl, setDocUrl] = React.useState(initialState);

  return (
    <main className="container">
      <p className="cTitle">犬の画像を表示するサイトです。</p>
      <div className="cDoc">
        <DogImage url={docUrl} />
        <button
          className="cDocButton"
          onClick={
            () => fetch("https://dog.ceo/api/breeds/image/random")
              .then(response => response.json())
              .then((data) => {
                if (data.status === "success") {
                  setDocUrl(data.message)
                }
              })
          }
        >更新</button>
      </div>
    </main>
  );
}
