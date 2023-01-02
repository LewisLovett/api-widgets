import { useEffect, useState } from "react";
import "./ThreeWordsWidget.scss";

const ThreeWordsWidget = ({latitude,longitude, threeWords, setThreeWords}) => {

 

      const getThreeWords = async () => {
        const apiKey = process.env.REACT_APP_3_WORDS_API_KEY;
        const url = `https://api.what3words.com/v3/convert-to-3wa?coordinates=${latitude},${longitude}&key=${apiKey}`;
        const res = await fetch(url);
        const data = await res.json();
        if(data){
            
          setThreeWords(data.words);
        }else{
          console.log("data not recived");
        }
      }
      


      useEffect(()=>{
        getThreeWords();
    }, [longitude])



    return(
        <>
        <h2>What3Words Map</h2>
        <p>The three words of your location are {threeWords}</p>
        </>
    )
}
export default ThreeWordsWidget