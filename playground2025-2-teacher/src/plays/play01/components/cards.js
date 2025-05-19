import React from 'react'
import '../../../css/bootstrap/bootstrap.css'

export function Cards01() {
  return (
    <>
    <div>cards</div>
      <div class="container px-4 py-4" id="home">
        <div class="d-flex flex-wrap justify-content-between bg-body-tertiary p-5 rounded">
          <div class="card m-3" style={{width: '18rem'}}>
            <img src="./imgs/img1.png" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="card m-3" style={{width: '18rem'}}>
            <img src="./imgs/img2.png" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="card m-3" style={{width: '18rem'}}>
            <img src="./imgs/img3.png" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="card m-3" style={{width: '18rem'}}>
            <img src="./imgs/img4.png" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" class="btn btn-primary">Go somewhere</a>
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
      <div class="container px-4 py-4" id="home">
        <div class="d-flex flex-wrap justify-content-between bg-body-tertiary p-5 rounded">
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
    <div class="card m-3" style={{width: '18rem'}}>
      <img src="./imgs/img1.png" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}
