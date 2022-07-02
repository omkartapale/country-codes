import "../scss/App.scss";
import Header from "../components/Header";
import Search from "./Search";
import CountryDetails from "./CountryDetails";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Search></Search>
      <CountryDetails></CountryDetails>
    </div>
  );
}

export default App;
