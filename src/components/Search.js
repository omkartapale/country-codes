function Search() {
  return (
    <div className="Search container">
      <div className="row mt-3 mt-md-5 justify-content-center">
        <div className="col-md-8">
          <form className="w-100" role="search">
            <input
              type="search"
              placeholder="Search country with name..."
              aria-label="Search"
              name="lookupCountry"
              id="lookupCountry"
              className="form-control form-control-lg rounded-pill border border-5"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;
