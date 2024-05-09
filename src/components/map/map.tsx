import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Pin from "./pin";
import { useState } from "react";

const TOKEN =
  "pk.eyJ1IjoiYXN0b2xwIiwiYSI6ImNsbnh2NjlkbTBlbW4yaXFweDd4Y3Vib2cifQ.uspZmvbSjgyFVjXu4P2PxA";

export default function MapComponent() {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  return (
    <Map
      mapboxAccessToken={TOKEN}
      initialViewState={{
        longitude: -87.42120049999939,
        latitude: 46.54851223057062,
        zoom: 15,
      }}
      mapStyle="mapbox://styles/astolp/clo91qwkd00o401o36rwvg2b2"
    >
      <Marker
        longitude={-87.42111149999939}
        latitude={46.54830223057062}
        onClick={() => setShowPopup(true)}
      >
        <Pin />
      </Marker>
      {showPopup && (
        <Popup
          longitude={-87.42111149999939}
          latitude={46.54830223057062}
          onClose={() => setShowPopup(false)}
          closeButton={true}
          closeOnClick={false}
        >
          <p>1440 west ridge street, marquette, MI</p>
          <p>Radiant Hair Salon</p>
        </Popup>
      )}
    </Map>
  );
}
