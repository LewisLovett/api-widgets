import { useEffect, useState } from "react";
import "./WordsOfDayContainer.scss";
import WordOfDay from "../../components/WordOfDay/WordOfDay";

const WordsOfDayContainer= () => {
    const [wordsOfDayList, setWordsOfDayList] = useState();
    const [wordsOfDayComponents, setWordsOfDayComponents] = useState();

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
            setWordsOfDayList(data);
        }else{
          console.log("data not recived");
        }
      }

    useEffect(()=>{
        getWords();
    })

    useEffect(()=>{
        setWordsOfDayComponents(
            wordsOfDayList.map((wordsOfDay)=>{
                return(<WordOfDay word={wordsOfDay.word} type={wordsOfDay.type} mean={wordsOfDay.mean}/>)
            }
        ))
    },[wordsOfDayList])

    

    return(
        <>
            {wordsOfDayComponents}
        </>
    )
}
export default WordsOfDayContainer