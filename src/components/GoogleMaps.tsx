import React from "react";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from "react-google-maps";

interface Props {
  isMarkerShown: boolean;
  defaultZoom: number;
}

const GoogleMaps = withScriptjs(
  withGoogleMap((props: Props) => {
    const { isMarkerShown, defaultZoom } = props;
    return (
      <GoogleMap
        defaultZoom={defaultZoom}
        defaultCenter={{ lat: 60.74, lng: 23.260182 }}
      >
        {isMarkerShown && (
          <>
            <Marker
              position={{ lat: 60.65251602474173, lng: 23.13859735116043 }}
            />
            <Marker
              position={{ lat: 60.775106359059684, lng: 23.366341931033 }}
            />
          </>
        )}
      </GoogleMap>
    );
  })
);

export default React.memo(GoogleMaps);
