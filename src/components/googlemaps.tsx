import { GoogleMap } from "@react-google-maps/api";
import { useCallback, useEffect, useRef } from "react";
import { useJsApiLoader } from "@react-google-maps/api";

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

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

  useEffect(() => {
    if (isLoaded && mapRef.current) {
      const map = mapRef.current;

      const advancedMarker = new (
        window as any
      ).google.maps.marker.AdvancedMarkerElement({
        map,
        position: center,
        title: "Advanced Marker",
      });

      return () => {
        advancedMarker.setMap(null);
      };
    }
  }, [isLoaded]);

  return (
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
          onLoad={onLoad}
          options={defaultOption}
        >
          <div className="absolute top-0 left-0  ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d89324.4674163899!2d-73.5863944!3d45.602814!3m2!1i1024!2i768!4f14.1!3m3!1m2!1s0x4cc91eaf5df68673%3A0xcc4805264f6599b7!2s1-855-MAITRES!5e0!3m2!1sen!2sch!4v1719701490468!5m2!1sen!2sch"
              className="w-[320px] h-[288px] md:w-[390px] md:h-[330px] lg:w-[600px] lg:h-[506px]"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
             />
          </div>
        </GoogleMap>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}

export default GoogleMaps;
