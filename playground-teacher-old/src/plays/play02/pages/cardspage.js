import { useState } from 'react';
import { seedGenerator } from '../../../services/seido-helpers.js';
import {Cards03} from '../components/cards.js'
import { Pager } from '../components/pager.js';

export function CardsPage() {

  //init data
  const seed = new seedGenerator();
  const initData = [];
  for (let index = 0; index < 1000; index++) {

    const o = {
      img:seed.fromString('img1.png, img2.png, img3.png, img4.png, img5.png, img6.png'), 
      title: seed.firstName, 
      text: seed.latinSentence }
    initData.push(o);
  };


  //pagination
  const pageSize = 5;
  const maxPageNr =  Math.ceil(initData.length/pageSize);
  
  const [currentPageNr, setCurrentPage] = useState(0);
  const [images, setImages] = useState (initData.slice(currentPageNr * pageSize, currentPageNr * pageSize + pageSize));
  

  const onSeedClick = (e) => {
    console.log(e.target)

    const newData = []
    for (let index = 0; index < 10; index++) {

      const o = {
        img:seed.fromString('img1.png, img2.png, img3.png, img4.png, img5.png, img6.png'), 
        title: seed.firstName, 
        text: seed.latinSentence }
      newData.push(o);
    };

    setImages(newData); 
  }

  const onClickPrev = (e) => {
    if (currentPageNr > 0)
    {
      setCurrentPage(currentPageNr-1);
      console.log(currentPageNr);
      
      setImages(initData.slice(currentPageNr * pageSize, currentPageNr * pageSize + pageSize));
    }
  }
  const onClickNext = (e) => {
    if (currentPageNr < maxPageNr-1)
    {
      setCurrentPage(currentPageNr+1);
      console.log(currentPageNr);
      
      setImages(initData.slice(currentPageNr * pageSize, currentPageNr * pageSize + pageSize));
    }
  }




  return (
    <>

  <div class="px-4 py-5 text-center">
    <h1 class="display-5 fw-bold">Centered hero</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
    </div>
  </div>
    <div className="container px-4" id="home">

      <Pager onClickNext={onClickNext} onClickPrev={onClickPrev}/>
      <Cards03 images={images} />
      <Pager onClickNext={onClickNext} onClickPrev={onClickPrev}/>

    </div>
    </>
  );}

  

  