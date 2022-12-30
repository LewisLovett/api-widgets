import "./MapWidget.scss";
import {What3wordsMap} from "@what3words/react-components";

const API_KEY = process.env.REACT_APP_3_WORDS_API_KEY;
const MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const MapWidget = ({latitude,longitude}) => {

    return (
      <What3wordsMap
        id="w3w-map"
        api_key={API_KEY}
        map_api_key={MAP_API_KEY}
        zoom={18}
        selected_zoom={20}
        lng={longitude}
        lat={latitude}
        search_control_position={2}
        map_type_control={true}
        zoom_control={true}
        fullscreen_control={true}
        fullscreen_control_position={3}
        current_location_control_position={9}
        disable_default_ui={true}
        map_type_id="satellite"
        words="filled.count.soap"
      >
        <div slot="map" id="map" />
      </What3wordsMap>
    );
}
export default MapWidget