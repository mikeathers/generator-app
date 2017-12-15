import React from "react";
import { connect } from "react-redux";

import Quote from "./Quote";

export class QuotesPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="quote-page">
        <div className="content-container">
        <Quote />
          <div className="quote-page__buttons">
            <button className="button">Previous</button>
            <button className="button">Next</button>
            <button className="button">Save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(undefined, undefined)(QuotesPage)