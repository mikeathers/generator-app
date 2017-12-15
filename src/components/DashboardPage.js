import React from 'react';
import { Link } from "react-router-dom";

const DashboardPage = () => (
  <div className="dashboard">
   <h1>Welcome to Generator</h1>
   <h2>Select an option to get started!</h2>
   <div className="dashboard__options">
    <Link className="dashboard__option" to="/quotespage">Motivate me!</Link>
    <Link className="dashboard__option" to="#">Nah, show me the memes.</Link>
   </div>
  </div>
);

export default DashboardPage;
