import { useEffect, useState } from "react";
import "./ThreeWordsContainer.scss";
import MapWidget from "../../components/MapWidget/MapWidget";
import ThreeWordsWidget from "../../components/ThreeWordsWidget/ThreeWordsWidget";
const ThreeWordsContainer = ({latitude,longitude}) => {
    const [threeWords, setThreeWords] = useState();
    

    return(
        <>
              <ThreeWordsWidget latitude={latitude} longitude={longitude} threeWords={threeWords} setThreeWords={setThreeWords}/>
                <MapWidget  latitude={latitude} longitude={longitude} threeWords={threeWords}/>
        </>
    )
}
export default ThreeWordsContainer