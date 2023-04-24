import "../scss/CountryDetails.scss";
import CopyButton from "./common/CopyButton";

const CountryDetails = ({ countryFound }) => {
  return (
    <div className="CountryDetails">
      <div className="row mt-4 mt-md-5 pb-3 justify-content-center">
        <div className="col-md-10">
          <div className="card px-4 pt-4 pb-3 shadow-sm">
            <div className="card-body">
                <div>
                  <h2 className="mb-4">
                    Found "{countryFound.country}" for you!
                  </h2>
                  <div className="row">
                    <div className="col-md-6 col-xl-3">
                      <p className="mb-3">Country Name:</p>
                      <div className="display-6 d-flex align-items-center justify-content-between">
                        {countryFound.country}
                        <CopyButton copyContent={countryFound.country} />
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                      <p className="mb-3">Alpha-2 Code:</p>
                      <div className="display-6 d-flex align-items-center justify-content-between">
                        {countryFound.alpha2}
                        <CopyButton copyContent={countryFound.alpha2} />
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                      <p className="mb-3">Alpha-3 Code:</p>
                      <div className="display-6 d-flex align-items-center justify-content-between">
                        {countryFound.alpha3}
                        <CopyButton copyContent={countryFound.alpha3} />
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                      <p className="mb-3">Num-3 Code:</p>
                      <div className="display-6 d-flex align-items-center justify-content-between">
                        {countryFound.num3}
                        <CopyButton copyContent={countryFound.num3} />
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
