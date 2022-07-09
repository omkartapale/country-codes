const Search = ({ placeholderText, onChange }) => {
  return (
    <div className="Search">
      <form role="search">
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
  );
};

export default Search;
