import React from 'react'
import { uniqueId, seedGenerator } from '../../../services/seido-helpers';


export function Latinsentences(props) {

  const seed = new seedGenerator();
  const sentences = seed.latinSentences(props.nrItems);

  return (
    <>
    <h1>{props.title}</h1>
    <ul>
      {sentences.map(s => <li>{s}</li>)}
    </ul>
    </>
  )
}
