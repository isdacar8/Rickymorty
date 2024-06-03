/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import "./styles/ResidentCard.css";

const ResidentCard = ({ url }) => {
  const [resident, getResident] = useFetch(url);
  useEffect(() => {
    getResident();
  }, []);

  console.log(resident);
  return (
    <article className="resident-card">
      <section className="resident-info">
        <header className="resident-header">
          <img className="resident-image" src={resident?.image} alt="" />
          <div className="status-container">
            <div className={`status-circle ${resident?.status}`}></div>
            <div className="resident_status">{resident?.status}</div>
          </div>
        </header>
        <h3 className="resident-name">{resident?.name}</h3>
        <hr className="divider" />
        <ul className="resident-details">
          <li className="detail-item">
            <span>Species</span> {resident?.species}
          </li>
          <li className="detail-item">
            <span>Origin</span> {resident?.origin.name}
          </li>
          <li className="detail-item">
            <span>Episodes where appears</span> {resident?.episode.length}
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ResidentCard;
