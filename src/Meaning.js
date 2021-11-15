import React from "react";
export default function Meaning(props){
    console.log(props.meaning);
    return (
        <div className="Meaning">
        <h3>
            {props.meaning.partOfSpeech}
        </h3>
        {props.meaning.definitions.map(function)}
        <p>
            {props.meaning.definitions[0].definitions}
        </p>
        <p>
            {props.meaning.definitions[0].example}
        </p>
        </div>
    )
}