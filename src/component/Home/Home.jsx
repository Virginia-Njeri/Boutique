import React from 'react'
import hero from "../images/hero2.jpg"
import Products from '../Products'
// import hero3 from "../images/hero3.jpg"


function Home() {
  return (
    <div>
      <div className="card text-bg-dark border-0">
  <img src={hero} className="card-img" alt="" height="550px"/>
  <div className="card-img-overlay d-flex flex-column justify-content-center">
    <div className="container">
    <h5 className="card-title display-3 fw-bolder mb-0">NEW COLLECTION ARRIVALS</h5>
    <p className="card-text lead fs-2">CHECKOUT ALL THE NEW TRENDS</p>
    </div>
    
  </div>
</div>


    </div>
  )
}

export default Home