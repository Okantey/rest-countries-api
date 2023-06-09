import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Filter, Header, Search } from "../../components";
import "./Home.css";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const API_URL = "http://localhost:3500/data";

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Unable to fetch data");
        const countriesFetched = await response.json();
        setCountries(countriesFetched);
        setError(null);
      } catch (err) {
        setError(err.message);
      }
    };
    (async () => await fetchCountries())();
  }, []);

  const filteredCountries = countries
    .filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((country) => (filter === "" ? true : country.region === filter));

  const handleCountryClick = (name) => {
    const selectedCountry = filteredCountries.find(
      (country) => country.name === name
    );
    selectedCountry &&
      localStorage.setItem("selectedCountry", JSON.stringify(selectedCountry));
  };

  return (
    <main>
      <Header />
      <section className="filtering__section">
        <Search search={search} setSearch={setSearch} />
        <Filter filter={filter} setFilter={setFilter} />
      </section>
      {error && (
        <p
          style={{
            color: "red",
            fontWeight: "800",
            display: "grid",
            placeItems: "center",
            fontSize: "2rem",
          }}
        >
          {error}
        </p>
      )}
      <section className="country__display">
        {filteredCountries.map((country) => {
          return (
            <Link
              to={`/country/details/:${country.name}`}
              key={country.name}
              className="country__item"
              onClick={() => handleCountryClick(country.name)}
            >
              <img
                src={country.flag}
                alt={country.name}
                className="country__img"
              />
              <div className="country__props">
                <p className="country__name">{country.name}</p>
                <p>
                  <span>Population: </span>
                  {country.population}
                </p>
                <p>
                  <span>Region: </span>
                  {country.region}
                </p>
                <p>
                  <span>Capital: </span>
                  {country.capital}
                </p>
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
};

export default Home;
