// DO NOT DELETE

import React from 'react'
import { DogImage } from './DogImage'

export const Description = () => {
  const [docUrl, setDocUrl] = React.useState('https://images.dog.ceo/breeds/akita/Akita_inu_blanc.jpg');

  return (
    <main className="description">
      <p className="dTitle">犬の画像を表示するサイトです。</p>
      <div className="dDoc">
        <DogImage url={docUrl} />
        <button
          className="dDocButton"
          onClick={
            () => fetch("https://dog.ceo/api/breeds/image/random")
              .then(response => response.json())
              .then((data) => {
                if (data.status === "success") {
                  setDocUrl(data.message)
                }
              })
          }
        >更 新</button>
      </div>
    </main>
  );
}
