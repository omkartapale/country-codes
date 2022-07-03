import "../scss/CountryDetails.scss";
import CopyButton from "./CopyButton";

const CountryDetails = () => {
  return (
    <div className="CountryDetails container">
      <div className="row mt-4 mt-md-5 pb-3 justify-content-center">
        <div className="col-md-10">
          <div className="card px-4 pt-4 pb-3 shadow-sm">
            <div className="card-body">
              <h2 className="mb-4">Found India for you!</h2>
              <div className="row">
                <div className="col-md-6 col-xl-3">
                  <p className="mb-3">Country Name:</p>
                  <p className="display-6 d-flex align-items-center justify-content-between">
                    India
                    <CopyButton copyContent="India" />
                  </p>
                </div>
                <div className="col-md-6 col-xl-3">
                  <p className="mb-3">Alpha-2 Code:</p>{" "}
                  <p className="display-6 d-flex align-items-center justify-content-between">
                    IN
                    <CopyButton copyContent="IN" />
                  </p>
                </div>
                <div className="col-md-6 col-xl-3">
                  <p className="mb-3">Alpha-3 Code:</p>{" "}
                  <p className="display-6 d-flex align-items-center justify-content-between">
                    IND
                    <CopyButton copyContent="IND" />
                  </p>
                </div>
                <div className="col-md-6 col-xl-3">
                  <p className="mb-3">Num-3 Code:</p>
                  <p className="display-6 d-flex align-items-center justify-content-between">
                    356
                    <CopyButton copyContent="356" />
                  </p>
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
