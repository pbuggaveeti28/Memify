import React from "react";

function Meme() {
  return (
    <main>
      <form className="form">
        <div>
          <label>Top text </label>

          <input type="text" className="form-input" placeholder="Shut up" />
        </div>
        <div>
          <label> Bottom text</label>

          <input
            type="text"
            className="form-input"
            placeholder="take my money"
          />
        </div>

        <button className="form-button">Get a new meme🖼️</button>
      </form>
    </main>
  );
}

export default Meme;
