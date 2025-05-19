import React from 'react'
import { uniqueId, seedGenerator } from '../../../services/seido-helpers';

export function Helloworld() {

  const greeting = "Good Morning";
  const a = 3;
  const b = 5;
  const mytag = <p>this is a jsx tag</p>

  return (
    <>
    <h1>hello world</h1>
    <h2>Martin</h2>
    <p>bla bla bla. {greeting} {a*b} {Math.max(a,b)}</p>
    {mytag}
    </>
  )
}


export function MyFirstReactComp() {

  return (
  <>
  <h1>Hello again</h1>
  </>)
}


export function MySecondReactComp() {
  
  const array = [];
  for (let index = 0; index < 5; index++) {
    array.push(index)  
  }

  const greetings = ["Good morning", "Good evening", "Afternoon", "Sleep well",]
  return (
    <>
    <div>Mylist</div>
    <ul>
      {greetings.map(x => <li>{x}</li>)}
    </ul>
    </>
  )
}
