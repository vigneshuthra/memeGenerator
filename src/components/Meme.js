import React from "react";
import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
     topText:"",
     bottomText:"",
     randomImage: "http://i.imgflip.com/1bij.jpg"
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  let url
  function getMemeImage() {
    const memeArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    url = memeArray[randomNumber].url;

    setMeme( prevState => ({
      ...prevState,
      randomImage: url
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          className="form--input"
          type="text"
          placeholder="Top text"
        ></input>
        <input
          className="form--input"
          type="text"
          placeholder="Bottom text"
        ></input>
        <button onClick={getMemeImage} className="form--button">
          Get a new meme template
        </button>
      </div>
      <img className="meme--image" src={meme.randomImage} />
    </main>
  );
}
