import React from "react";
import memeData from "./memeData";

function Meme() {
  let url;
  function getMeme() {
    const memesArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    url = memesArray[randomNumber].url;
    console.log(url);
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
    </main>
  );
}

export default Meme;
