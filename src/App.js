import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import ImageCard from "./components/ImageCard";
function App() {
  const [currencyList, setCurrencyList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then((response) => setCurrencyList(response.data));
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="App">
      <div className="header p-2">
        <h2 className="text-center p-2">Cryptocurrency Tracker</h2>
        <div className="row justify-content-center">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5  col-xl-4 mt-3 mb-3">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>
      <div className="p-5 content d-flex flex-wrap justify-content-center mt-1">
        {currencyList
          .filter((currency) =>
            currency.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((currency) => (
            <ImageCard {...currency} />
          ))}
      </div>
    </div>
  );
}

export default App;
