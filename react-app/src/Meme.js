import React from "react";
import memeData from "./memeData.js";

function Meme() {
  const [memeImage, setMemeImage] = React.useState("");
  function getMeme() {
    const memesArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }
  return (
    <main>
      <p>{url}</p>
      <div className="form">
        <input type="text" className="form-input" placeholder="Shut up" />

        <input type="text" className="form-input" placeholder="take my money" />

        <button className="form-button" onClick={getMeme}>
          Get a new meme🖼️
        </button>
      </div>
      <img src={memeImage} className="meme" />
    </main>
  );
}

export default Meme;
