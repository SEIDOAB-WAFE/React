import { seedGenerator } from '../services/seido-helpers.js';
import Person from '../models/person.js';
import Animal from '../models/animal.js';
import {Helloworld, MyFirstReactComp, MySecondReactComp} from "../plays/play01/components/helloworld.js";
import { Latinsentences } from '../plays/play01/components/latinsentences.js';
import { Colorboxes } from '../plays/play01/components/colorboxes.js';
import { Cards01, Cards02, Cards03 } from '../plays/play01/components/cards.js';

//https://legacy.reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects
//You will notice React in Dev mode mounts the components twice.
//This is by intention to allow you to ease debugging. E.g. you can catch unmounting problems

export function App01_01() {

  return (
    <>
    <Latinsentences nrItems={15} title="Many sentences"/>
    <Latinsentences nrItems={3} title="Only a few sentences"/>
    </>
  );}

export function App01_02() {

  return (
    <>
    <Colorboxes title="Some boxes" colors={["Green", "Red", "Blue", "Yellow", "Yellow"]}/>
    <Colorboxes title="Other boxes" colors={["Orange", "Yellow"]}/>
    </>
  );}

export function App01_03() {

  const seed = new seedGenerator();

  const images = [];
  for (let index = 0; index < 10; index++) {

    const o = {
      img:seed.fromString('img1.png, img2.png, img3.png, img4.png, img5.png, img6.png'), 
      title: seed.firstName, 
      text: seed.latinSentence }
    images.push(o);
  };

  return (
    <>
    <Cards03 images={images} />
    </>
  );}

