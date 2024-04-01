import { createRef, useEffect } from "react";
import { initializeMap } from "./google-map-loader";

function GoogleMapLoader(props) {
  const mapRef = createRef();

  useEffect(() => {
    setTimeout(() => {
      props.init((mapConfig) => {
        if (mapRef.current) {
          return initializeMap(mapRef.current, mapConfig);
        }
      });
    }, 1000);
  }, [props.init]);

  return <div ref={mapRef} className={props.className}></div>;
}

GoogleMapLoader.defaultProps = {
  init: () => {},
};

export default GoogleMapLoader;
