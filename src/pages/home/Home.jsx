import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header, Search } from "../../components";
import "./Home.css";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const fetchCountriesURL = "http://localhost:3500/data";

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(fetchCountriesURL);
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
  return (
    <main>
      <Header />
      <section className="filtering__section">
        <Search search={search} setSearch={setSearch} />
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
        {countries.map((country) => {
          return (
            <Link
              to={`/country/details:${country.name}`}
              key={country.name}
              className="country__item"
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
