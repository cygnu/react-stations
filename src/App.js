// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const initalState = "https://images.dog.ceo/breeds/akita/Akita_inu_blanc.jpg";

  const [docUrl, setDocUrl] = React.useState(initalState);

  return (
    <header>
      <h1>Dogアプリ</h1>
      <p>犬の画像を表示するサイトです。</p>
      <img src={docUrl} />
      <button
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
    </header>
  );
}
