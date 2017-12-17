import React from "react";
import { connect } from "react-redux";
import Meme from "./Meme";
export class MemePage extends React.Component {
  constructor() {
    super();
    this.state = {
      memes: "",
      currentMeme: ""
    };
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes", { method: "get" })
      .then(response => {
        if (response.status !== 200) {
          console.log("Looks like there was a problem: " + response.status);
          return;
        }
        response.json().then(memes => {
          console.log(memes.data.memes[0]);
          this.setState({ memes: memes.data.memes });
          this.setState({ currentMeme: memes.data.memes[0] });
        });
      })
      .catch(err => {
        console.log("Error: ", err.message);
      });
  }

  render() {
    return (
      <div className="meme-page">
        <div className="content-container">
          <Meme meme={this.state.currentMeme} />
          <div className="meme-page__buttons">
            <button className="button">Previous</button>
            <button className="button" onClick={this.getQuote}>
              Next
            </button>
            <button className="button">Save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(MemePage);
