import { useEffect, useState } from "react";
import "./WordOfDay.scss";

const WordOfDay= ({word,type,mean}) => {

    

    return(
        <div className="words-container__word-block">
            <h3>{word}</h3>
            <p>{type}</p>
            <p>{mean}</p>
        </div>
    )
}
export default WordOfDay