/* eslint-disable react/prop-types */
import './styles/LocationInfo.css'

const LocationInfo = ({ location }) => {
  return (
    <article className="location-info">
      <h2 className="location-name">{location?.name}</h2>
      <ul className="location-details">
        <li className="location-type">
          <h3>Type</h3>
          <span>{location?.type}</span>
        </li>
        <li className="location-dimension">
          <h3>Dimension</h3>
          <span>{location?.dimension}</span>
        </li>
        <li className="location-population">
          <h3>Population</h3>
          <span>{location?.residents.length}</span>
        </li>
      </ul>
    </article>
  );
};

export default LocationInfo;
