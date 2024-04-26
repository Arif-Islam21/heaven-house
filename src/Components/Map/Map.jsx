import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import { Helmet } from "react-helmet";

function Map() {
  return (
    <MapContainer
      className="border-2 h-[60vh] w-[60vw] mx-auto"
      center={[25.891639, 88.900512]}
      zoom={13}
      scrollWheelZoom={false}
    >
      {/* <Helmet>
        <title>Country Map</title>
      </Helmet> */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
