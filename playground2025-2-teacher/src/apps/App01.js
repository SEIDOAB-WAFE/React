import { seedGenerator } from '../services/seido-helpers.js';
import Person from '../models/person.js';
import Animal from '../models/animal.js';
import {Helloworld, MyFirstReactComp, MySecondReactComp} from "../plays/play01/components/helloworld.js";
import { Latinsentences } from '../plays/play01/components/latinsentences.js';
import { Colorboxes } from '../plays/play01/components/colorboxes.js';

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
    <Colorboxes colors={["Green", "Red"]}/>
    </>
  );}

export function App01_03() {

  return (
    <>
    <Helloworld/>
    </>
  );}

