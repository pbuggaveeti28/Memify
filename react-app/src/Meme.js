import React from "react";
import memeData from "./memeData.js";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memeData);

  function getMeme() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  return (
    <main>
      <div className="form">
        <input type="text" className="form-input" placeholder="Shut up" />

        <input type="text" className="form-input" placeholder="take my money" />

        <button className="form-button" onClick={getMeme}>
          Get a new meme🖼️
        </button>
      </div>
      <img src={meme.randomImage} className="meme-image" />
    </main>
  );
}
