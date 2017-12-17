import React from "react";

const Meme = props => (
  <div className="meme">
    <div className="meme__content">
      <img src={props.meme.url} />
    </div>
  </div>
);

export default Meme;
