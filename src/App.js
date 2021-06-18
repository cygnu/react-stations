// DO NOT DELETE

import * as React from 'react'
import './reset.css'
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const initialState = "https://images.dog.ceo/breeds/akita/Akita_inu_blanc.jpg";

  const [docUrl, setDocUrl] = React.useState(initialState);

  return (
    <React.Fragment>
      <header className="header">
        <h1>Dogアプリ</h1>
      </header>
      <main className="container">
        <p className="cTitle">犬の画像を表示するサイトです。</p>
        <div className="cDoc">
          <img src={docUrl} className="cDocImage" />
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
    </React.Fragment>
  );
}
