import React, { Component } from 'react'
import Search from "../components/Search";
import CountryDetails from "../components/CountryDetails";

export class Home extends Component {

  render() {
    return (
      <div className="Home">
        <Search />
        <CountryDetails />
      </div>
    )
  }
}

export default Home