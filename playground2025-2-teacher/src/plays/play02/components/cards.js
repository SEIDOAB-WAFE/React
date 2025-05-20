import React from 'react'
import '../../../css/bootstrap/bootstrap.css'


export function Cards01() {
  return (
    <>
    <div>cards</div>
      <div className="container px-4 py-4" id="home">
        <div className="d-flex flex-wrap justify-content-between bg-body-tertiary p-5 rounded">
          <div className="card m-3" style={{width: '18rem'}}>
            <img src="./imgs/img1.png" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div className="card m-3" style={{width: '18rem'}}>
            <img src="./imgs/img2.png" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div className="card m-3" style={{width: '18rem'}}>
            <img src="./imgs/img3.png" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div className="card m-3" style={{width: '18rem'}}>
            <img src="./imgs/img4.png" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}


export function Cards02() {
  return (
    <>
    <div>cards</div>
      <div className="container px-4 py-4" id="home">
        <div className="d-flex flex-wrap justify-content-between bg-body-tertiary p-5 rounded">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
      </>
  )
}

function Card() {
  return (
    <div className="card m-3" style={{width: '18rem'}}>
      <img src="./imgs/img1.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}


export function Cards03(props) {
  
  console.log(props)

  const onClick = (e) => {

    console.log(`Header click ${e.target.innerText}`);
  }

  const onImageClick = (e) => {

    console.log(`Image click recognized by parent ${e.target.src}`);
  }
  
  return (
    <>
    <div onClick={onClick}>cards</div>
      <div className="container px-4 py-4" id="home">
        <div className="d-flex flex-wrap justify-content-between bg-body-tertiary p-5 rounded">

          {props.images.map (image => 
            <Card03 img={image.img} title={image.title} text={image.text} onImageClick={onImageClick}/>
            )}

        </div>
      </div>
      </>
  )
}




function Card03(props) {

  const onClick = (e) => {
    console.log(`Image click ${e.target.src}`)

    if (props.onImageClick) props.onImageClick(e);
  }

  const src = `./imgs/${props.img}`;

  return (
    <div className="card m-3" style={{width: '18rem'}}>
      <img src={src} className="card-img-top" alt="..." onClick={onClick}/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}
