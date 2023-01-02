import { useEffect, useState } from "react";
import "./WordOfDay.scss";

const WordOfDay= ({word,type,mean}) => {

    

    return(
        <>
            <h3>{word}</h3>
            <p>{type}</p>
            <p>{mean}</p>
        </>
    )
}
export default WordOfDay