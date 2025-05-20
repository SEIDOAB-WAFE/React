import { seedGenerator } from '../../../services/seido-helpers.js';
import {Cards03} from '../components/cards.js'

export function CardsPage() {

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