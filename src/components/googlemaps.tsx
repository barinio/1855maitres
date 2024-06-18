// AIzaSyB_GkvDC4U2o13a88Ir4GFsa6LDs9e_N_M
// AIzaSyC6lMMfZsZWuSFu8AbrnEHuGIn5V1ILzGs
const API_KEY = "AIzaSyC6lMMfZsZWuSFu8AbrnEHuGIn5V1ILzGs";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useCallback, useRef } from "react";
import { useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const defaultOption = {
  panControl: true,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
};

const center = {
  lat: 45.56570591128072,
  lng: -73.57754337085282,
};

function GoogleMaps() {
  const mapRef = useRef(undefined);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });

  const onLoad = useCallback(function callback(map: any) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback(map: any) {
    mapRef.current = undefined;
  }, []);

  return (
    // <LoadScript googleMapsApiKey={API_KEY}>
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={defaultOption}
        >
          <Marker position={center} />
        </GoogleMap>
      ) : (
        <h2>Loading...</h2>
      )}
    </>

    // </LoadScript>
  );
}

export default GoogleMaps;
