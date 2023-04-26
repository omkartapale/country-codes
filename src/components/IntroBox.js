import "../scss/CountryDetails.scss";
import TypeIt from "typeit-react";

const IntroBox = () => {
  return (
    <div className="CountryDetails">
      <div className="row mt-4 mt-md-5 pb-3 justify-content-center">
        <div className="col-md-10">
          <div className="card px-4 pt-4 pb-3 shadow-sm">
            <div className="card-body">
              <div>
                <div className="mb-4 display-6 text-break">
                  <p className="visually-hidden">
                    Search, Lookup and Interconvert country codes with ISO
                    3166&#8209;1:2020
                  </p>
                  <TypeIt
                    options={{
                      loop: true,
                      waitUntilVisible: true,
                    }}
                    getBeforeInit={(instance) => {
                      instance
                        .type('<span class="fw-bolder">Search</span>')
                        .pause(1950)
                        .delete(6)
                        .type('<span class="fw-bolder">Lookup</span>')
                        .pause(1950)
                        .delete(6)
                        .type('<span class="fw-bolder">Interconvert</span>')
                        .pause(1950);

                      return instance;
                    }}
                  />{" "}
                  country codes with ISO 3166&#8209;1:2020
                </div>
                <p className="mb-0">
                  Search with Country names or lookup codes throughout the
                  database or interconvert from one type to another and copy
                  results into the clipboard in a single click. The supported
                  country code types are Alpha-2, Alpha-3, and Num-3.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroBox;
