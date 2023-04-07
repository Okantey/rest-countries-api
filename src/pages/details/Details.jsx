import React, { useEffect, useState } from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import "./Details.css";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components";

const Details = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedCountry = localStorage.getItem("selectedCountry");
    if (storedCountry) {
      const getCountry = JSON.parse(storedCountry);
      setData(getCountry);
    }
  }, []);
  return (
    <main className="details">
      <Header />
      <div className="back__btn__box">
        <button onClick={() => navigate("/")} className="back__btn">
          <ArrowBackOutlinedIcon size={20} />
          <span>Back</span>
        </button>
      </div>
      <section className="country__details__center">
        <section className="details__display">
          <div className="country__flag__box">
            <img src={data.flag} alt={data.name} />
          </div>
          <div className="country__details__box">
            <h1>{data.name}</h1>
            <div className="sub__details">
              <div className="sub__details__one">
                <p>
                  <span className="sub__details__title">Native Name: </span>
                  <span>{data.nativeName}</span>
                </p>
                <p>
                  <span className="sub__details__title">Population: </span>
                  <span>{data.population}</span>
                </p>
                <p>
                  <span className="sub__details__title">Region: </span>
                  <span>{data.region}</span>
                </p>
                <p>
                  <span className="sub__details__title">Sub Region: </span>
                  <span>{data.subregion}</span>
                </p>
                <p>
                  <span className="sub__details__title">Capital: </span>
                  <span>{data.capital}</span>
                </p>
              </div>
              <div className="sub__details__two">
                <p>
                  <span className="sub__details__title">
                    Top Level Domain:{" "}
                  </span>
                  <span>{data.topLevelDomain}</span>
                </p>
                {/* <p>
                <span className="sub__details__title">Currencies: </span>
                <span>{data.currencies[0].code}</span>
              </p>
              <p>
                <span className="sub__details__title">Languages: </span>
                <span>{data.languages[0]}</span>
              </p> */}
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Details;
