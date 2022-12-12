import React from "react"

export default function Card(props) {
  return (
    <section className="wrapper">
      <div className="card">
        <img
          src={`./images/${props.item.imageUrl}`}
          className="card-image"
          alt="img-url"
        />
        <div className="image-info">
          <div className="card-location">
            <img
              className="map-marker"
              src="../images/map-marker.png"
              alt="map marker"
            />
            <span className="location-text">{props.item.location}</span>
            <span className="location-map">
              <a href={props.item.googleMapsUrl}>View on Google Maps</a>
            </span>
          </div>
          <h2 className="card-title">{props.item.title}</h2>
          <span className="card-date">
            {props.item.startDate} - {props.item.endDate}
          </span>
          <p className="card-desc">{props.item.description}</p>
        </div>
      </div>
      <div>{/* <hr className="hr" /> */}</div>
    </section>
  )
}
