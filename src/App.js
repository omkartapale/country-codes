import "./scss/App.scss";
import Header from "./components/Header";
import Search from "./components/Search";
import CountryDetails from "./components/CountryDetails";

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
