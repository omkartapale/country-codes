import React, { Component } from "react";
import Search from "../components/Search";
import CountryDetails from "../components/CountryDetails";
import iso3166Lookup from "iso3166-lookup";
export class Home extends Component {
  state = {
    country: undefined,
  };

  searchCountry = (e) => {
    let searchTerm = e.target.value;
    if (searchTerm.length > 2) {
      let countrySearch = iso3166Lookup.findCountry(searchTerm);
      countrySearch = countrySearch === undefined ? false : countrySearch;
      this.setState({
        country: countrySearch,
      });
    } else {
      this.setState({
        country: undefined,
      });
    }
  };

  render() {
    let countryDetailsBlock;
    switch (this.state.country) {
      case undefined:
        break;
      case false:
        countryDetailsBlock = (
          <div className="container">
            <h3 className="mt-5 pt-3 text-center text-muted">
              Sorry, country not found!
            </h3>
            <p className="text-center text-muted">
              Try Lookup feature to search for matching results.
            </p>
          </div>
        );
        break;
      default:
        countryDetailsBlock = (
          <CountryDetails countryFound={this.state.country} />
        );
    }
    return (
      <div className="Home mt-3 mt-md-5 container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <Search
              placeholderText="Search country with name..."
              onChange={this.searchCountry}
            />
          </div>
        </div>
        {countryDetailsBlock}
      </div>
    );
  }
}

export default Home;
