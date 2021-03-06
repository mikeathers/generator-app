import React from "react";
import { connect } from "react-redux";

import Quote from "./Quote";

export class QuotesPage extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: ""
    };
  }
  //https://talaikis.com/api/quotes/random/

  getQuote = () => {
    fetch(
      "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
      {
        method: "get"
      }
    )
      .then(response => {
        if (response.status !== 200) {
          console.log("Looks like there was a problem: " + response.status);
          return;
        }
        response.json().then(data => {
          console.log(data);
          this.setState({ quote: data[0].content });
        });
      })
      .catch(err => {
        console.log("Error: ", err.message);
      });
  };

  render() {
    return (
      <div className="quote-page">
        <div className="content-container">
          <Quote quote={this.state.quote} />
          <div className="quote-page__buttons">
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

export default connect(undefined, undefined)(QuotesPage);
