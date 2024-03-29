import React from "react";

function Meme() {
  return (
    <form action="/submit-form" method="post">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <input type="submit" value="Submit" />
    </form>
  );
}

export default Meme;
