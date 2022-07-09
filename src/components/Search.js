const Search = ({ placeholderText, onChange }) => {
  return (
    <div className="Search container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form className="w-100" role="search">
            <input
              type="search"
              placeholder={placeholderText}
              aria-label="Search"
              name="lookupCountry"
              id="lookupCountry"
              className="form-control form-control-lg rounded-pill border border-5"
              onChange={onChange}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
