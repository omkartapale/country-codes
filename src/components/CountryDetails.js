import "../scss/CountryDetails.scss";
import { ReactComponent as ClipboardSvg } from "../assets/clipboard.svg";
import { ReactComponent as CopiedSvg } from "../assets/check.svg";

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
                    <button
                      className="btn-clipboard"
                      type="button"
                      title="Copy to clipboard"
                    >
                      <ClipboardSvg width="24" height="24" />
                    </button>
                  </p>
                </div>
                <div className="col-md-6 col-xl-3">
                  <p className="mb-3">Alpha-2 Code:</p>{" "}
                  <p className="display-6 d-flex align-items-center justify-content-between">
                    IN
                    <button
                      className="btn-clipboard"
                      type="button"
                      title="Copied"
                    >
                      <ClipboardSvg width="24" height="24" />
                    </button>
                  </p>
                </div>
                <div className="col-md-6 col-xl-3">
                  <p className="mb-3">Alpha-3 Code:</p>{" "}
                  <p className="display-6 d-flex align-items-center justify-content-between">
                    IND
                    <button
                      className="btn-clipboard"
                      type="button"
                      title="Copied"
                    >
                      <CopiedSvg width="24" height="24" />
                    </button>
                  </p>
                </div>
                <div className="col-md-6 col-xl-3">
                  <p className="mb-3">Num-3 Code:</p>
                  <p className="display-6 d-flex align-items-center justify-content-between">
                    246
                    <button
                      className="btn-clipboard"
                      type="button"
                      title="Copy to clipboard"
                    >
                      <ClipboardSvg width="24" height="24" />
                    </button>
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
