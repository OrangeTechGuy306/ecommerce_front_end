import React from 'react'
import "./Collections.css"
import {Link} from "react-router-dom"
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

import ear from "../../assets/e1.png"
import tv from "../../assets/tvicon.png"
import reff from "../../assets/r1.png"
import lap from "../../assets/l1.png"
import gen from "../../assets/g1.png"
import watch from "../../assets/w1.png"
import sn from "../../assets/s1.png"


const Collections = () => {
  return (

    <section className='collectionSection'>

        <h1>COLLECTIONS</h1>
        <p>Check through our collections</p>
        <div className='collectionContainer'>


            <div className='collectionCard'>
                <Link to="" className='collectionLink'>
                    <img src={ear} alt='' className='collectionImg'/>
                    <h3>Mobile Accessories</h3>
                </Link>
            </div>

            <div className='collectionCard'>
                <Link to="" className='collectionLink'>
                    <img src={tv} alt='' className='collectionImg'/>
                    <h3>Televisions</h3>
                </Link>
            </div>

            <div className='collectionCard'>
                <Link to="" className='collectionLink'>
                    <img src={reff} alt='' className='collectionImg'/>
                    <h3>Refrigerators</h3>
                </Link>
            </div>

            <div className='collectionCard'>
                <Link to="" className='collectionLink'>
                    <img src={lap} alt='' className='collectionImg'/>
                    <h3>Laptops/PC</h3>
                </Link>
            </div>

            <div className='collectionCard'>
                <Link to="" className='collectionLink'>
                    <img src={gen} alt='' className='collectionImg'/>
                    <h3>Generators</h3>
                </Link>
            </div>

            <div className='collectionCard'>
                <Link to="" className='collectionLink'>
                    <img src={watch} alt='' className='collectionImg'/>
                    <h3>Watches</h3>
                </Link>
            </div>

            <div className='collectionCard'>
                <Link to="" className='collectionLink'>
                    <img src={sn} alt='' className='collectionImg'/>
                    <h3>Sneakers</h3>
                </Link>
            </div>

        </div>
    </section>

  )
}

export default Collections