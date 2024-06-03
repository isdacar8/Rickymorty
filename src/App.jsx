/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import getRandomNumber from "./services/getRandomNumber";
import LocationInfo from "./components/LocationInfo";
import ResidentCard from "./components/ResidentCard";

function App() {
  const [locationId, setlocationId] = useState(getRandomNumber(126));
  const [characterId, setCharacterId] = useState(getRandomNumber(126));
  const [isEmptyError, setIsEmptyError] = useState(false);
  const [isInvalidRangeError, setIsInvalidRangeError] = useState(false);
  const urls = [
    `https://rickandmortyapi.com/api/location/${locationId}`,
    `https://rickandmortyapi.com/api/character/${characterId}`,
  ];
  const url = `https://rickandmortyapi.com/api/location/${locationId}`;
  const [location, getLocation, hasError] = useFetch(urls[0]);
  const [character, getCharacter] = useFetch(urls[1]);
  const [residentUrl, getResidentUrl] = useFetch(url);
  const inputId = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setlocationId(inputId.current.value.trim());
  };

  useEffect(() => {
    getLocation();
    getResidentUrl();
  }, [locationId]);

  return (
    <>
      <div>
        <header className="main-header">
          <img className="header-img" src="/images/rickymorty.png" alt="" />
          <img className="header-img2" src="/images/logo.png" alt="" />
        </header>
        <form className="search-form" onSubmit={handleSubmit}>
          <input className="search-input" ref={inputId} type="text" />
          <button className="search-button">Search</button>
        </form>
        {hasError ? (
          <h2
            style={{
              color: "white",
              margin: "0 auto",
              textAlign: "center",
              marginTop: "3em",
            }}
          >
            Hey! you must provide an id 1 to 126 -.- <></>
          </h2>
        ) : (
          <>
            <LocationInfo location={location} />
            <div className="card_container">
              {location?.residents.map((url) => (
                <ResidentCard key={url} url={url} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
