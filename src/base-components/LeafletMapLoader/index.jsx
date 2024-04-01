import { createRef, useEffect } from "react";
import { initializeMap } from "./leaflet-map-loader";
import clsx from "clsx";

function LeafletMapLoader(props) {
  const mapRef = createRef();

  useEffect(() => {
    props.init((mapConfig) => {
      if (mapRef.current) {
        return initializeMap(mapRef.current, mapConfig);
      }
    });
  }, [props.init]);

  return (
    <div
      ref={mapRef}
      className={clsx([
        !props.darkMode && "[&_.leaflet-tile-pane]:saturate-[.3]",
        props.darkMode &&
          "[&_.leaflet-tile-pane]:grayscale [&_.leaflet-tile-pane]:invert [&_.leaflet-tile-pane]:brightness-90 [&_.leaflet-tile-pane]:hue-rotate-15",
        props.className,
      ])}
    ></div>
  );
}

LeafletMapLoader.defaultProps = {
  init: () => {},
};

export default LeafletMapLoader;
