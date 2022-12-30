import { useEffect, useState } from "react";
import "./ThreeWordsWidget.scss";

const ThreeWordsWidget = ({latitude,longitude}) => {

    const [threeWords, setThreeWords] = useState();

      const getThreeWords = async () => {
        const apiKey = process.env.REACT_APP_3_WORDS_API_KEY;
        const url = `https://api.what3words.com/v3/convert-to-3wa?coordinates=${longitude},${latitude}&key=${apiKey}`;
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
        <p>The three words of your location are {threeWords}</p>
        </>
    )
}
export default ThreeWordsWidget