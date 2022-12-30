import { useEffect, useState } from "react";
import "./WordOfDayWidget.scss";

const WordOfDayWidget = () => {

    const getWords = async () => {
        const url = `https://word-of-the-day2.p.rapidapi.com/word/today`;

        const res = await fetch(url,{
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_WORDS_API_KEY,
                'X-RapidAPI-Host': 'word-of-the-day2.p.rapidapi.com'
            }
        });
        const data = await res.json();
        if(data){
            console.log(data);
        }else{
          console.log("data not recived");
        }
      }

      useEffect(()=>{
        getWords();
    })

    

    return(
        <>

        </>
    )
}
export default WordOfDayWidget