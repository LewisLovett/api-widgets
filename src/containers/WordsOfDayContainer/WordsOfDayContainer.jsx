import { useEffect, useState } from "react";
import "./WordsOfDayContainer.scss";
import WordOfDay from "../../components/WordOfDay/WordOfDay";
import wordsOfData from '../../assets/wordsOfDay.json';

const WordsOfDayContainer= () => {
    const [wordsOfDayList, setWordsOfDayList] = useState([]);
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
            setWordsOfDayList(wordsOfData.words);
        }
      }

    useEffect(()=>{
        // getWords();
        setWordsOfDayList(wordsOfData.words);
    },[])

    useEffect(()=>{
        setWordsOfDayComponents(
            wordsOfDayList.map((wordsOfDay)=>{
                return(<WordOfDay word={wordsOfDay.word} type={wordsOfDay.type} mean={wordsOfDay.mean}/>)
            }
        ))
    },[wordsOfDayList])

    

    return(
        <>
            <h2>Words of the Day</h2>
            <div className="words-container">
                
                {wordsOfDayComponents}
            </div>
        </>
    )
}
export default WordsOfDayContainer