import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { useCallback, useRef } from "react";
import { useJsApiLoader } from "@react-google-maps/api";

const GOOGLE_API_KEY = "AIzaSyC6lMMfZsZWuSFu8AbrnEHuGIn5V1ILzGs";

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
    googleMapsApiKey: GOOGLE_API_KEY,
  });

  const onLoad = useCallback(function callback(map: any) {
    mapRef.current = map;
  }, []);

  return (
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          onLoad={onLoad}
          // onUnmount={onUnmount}
          options={defaultOption}
        >
          <MarkerF position={center} />
        </GoogleMap>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}

export default GoogleMaps;
