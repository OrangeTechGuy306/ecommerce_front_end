import React from 'react'
import "./Card.css"
import {Link} from "react-router-dom"
import * as Unicons from "@iconscout/react-unicons"

import Flicking from '@egjs/react-flicking'
import "@egjs/react-flicking/dist/flicking.css";
import { gens, laps, refs, sneakers, tels, watches } from '../files/Exportfiles'



const Card = ({watch}) => {
  return (
    <section>
        <div className='cardContainer'>      

          <Flicking  autoResize={true} circular={true}>

              <div className='cartCard'>
                  <Link to="/cart" className="cartLink">
                      <div className="cartCardImgContainer">
                          <img src={refs.ref1} alt='' className='cartCardImg'/>
                      </div>
                      <h4>Rolex Watch</h4>
                      <h3>N12,998</h3>
                      <h4>50 item(s) left</h4>
                  </Link>
                  <button className='cartBtn'>
                      <Unicons.UilShoppingCart color="white" size={20} />Add to Cart
                  </button>
              </div>

              <div className='cartCard'>
                  <Link to="/cart" className="cartLink">
                      <div className="cartCardImgContainer">
                          <img src={gens.gen1} alt='' className='cartCardImg'/>
                      </div>
                      <h4>Tiger Generator</h4>
                      <h3>N105,998</h3>
                      <h4>50 item(s) left</h4>
                  </Link>
                  <button className='cartBtn'>
                      <Unicons.UilShoppingCart color="white" size={20} />Add to Cart
                  </button>
              </div>

              <div className='cartCard'>
                  <Link to="/cart" className="cartLink">
                      <div className="cartCardImgContainer">
                          <img src={laps.lap3} alt='' className='cartCardImg'/>
                      </div>
                      <h4>HP laser PC</h4>
                      <h3>236,980</h3>
                      <h4>50 item(s) left</h4>
                  </Link>
                  <button className='cartBtn'>
                      <Unicons.UilShoppingCart color="white" size={20} />Add to Cart
                  </button>
              </div>
              
              <div className='cartCard'>
                  <Link to="/cart" className="cartLink">
                      <div className="cartCardImgContainer">
                          <img src={sneakers.sn4} alt='' className='cartCardImg'/>
                      </div>
                      <h4>Nike Sneaker</h4>
                      <h3>N17,999</h3>
                      <h4>50 item(s) left</h4>
                  </Link>
                  <button className='cartBtn'>
                      <Unicons.UilShoppingCart color="white" size={20} />Add to Cart
                  </button>
              </div>

              <div className='cartCard'>
                  <Link to="/cart" className="cartLink">
                      <div className="cartCardImgContainer">
                          <img src={watches.w3} alt='' className='cartCardImg'/>
                      </div>
                      <h4>Apple Watch</h4>
                      <h3>N12,998</h3>
                      <h4>50 item(s) left</h4>
                  </Link>
                  <button className='cartBtn'>
                      <Unicons.UilShoppingCart color="white" size={20} />Add to Cart
                  </button>
              </div>

              <div className='cartCard'>
                  <Link to="/cart" className="cartLink">
                      <div className="cartCardImgContainer">
                          <img src={tels.tv3} alt='' className='cartCardImg'/>
                      </div>
                      <h4>LG TV L212H3</h4>
                      <h3>N210,708</h3>
                      <h4>50 item(s) left</h4>
                  </Link>
                  <button className='cartBtn'>
                      <Unicons.UilShoppingCart color="white" size={20} />Add to Cart
                  </button>
              </div>

              <div className='cartCard'>
                  <Link to="/cart" className="cartLink">
                      <div className="cartCardImgContainer">
                          <img src={watch} alt='' className='cartCardImg'/>
                      </div>
                      <h4>Rolex Watch</h4>
                      <h3>N12,998</h3>
                      <h4>50 item(s) left</h4>
                  </Link>
                  <button className='cartBtn'>
                      <Unicons.UilShoppingCart color="white" size={20} />Add to Cart
                  </button>
              </div>

              <div className='cartCard'>
                  <Link to="/cart" className="cartLink">
                      <div className="cartCardImgContainer">
                          <img src={refs.ref7} alt='' className='cartCardImg'/>
                      </div>
                      <h4>Panasonic Freezer</h4>
                      <h3>N90,998</h3>
                      <h4>50 item(s) left</h4>
                  </Link>
                  <button className='cartBtn'>
                      <Unicons.UilShoppingCart color="white" size={20} />Add to Cart
                  </button>
              </div>

              <div className='cartCard'>
                  <Link to="/cart" className="cartLink">
                      <div className="cartCardImgContainer">
                          <img src={sneakers.sn11} alt='' className='cartCardImg'/>
                      </div>
                      <h4>Rolex Watch</h4>
                      <h3>N12,998</h3>
                      <h4>50 item(s) left</h4>
                  </Link>
                  <button className='cartBtn'>
                      <Unicons.UilShoppingCart color="white" size={20} />Add to Cart
                  </button>
              </div>

              <div className='cartCard'>
                  <Link to="/cart" className="cartLink">
                      <div className="cartCardImgContainer">
                          <img src={watch} alt='' className='cartCardImg'/>
                      </div>
                      <h4>Rolex Watch</h4>
                      <h3>N12,998</h3>
                      <h4>50 item(s) left</h4>
                  </Link>
                  <button className='cartBtn'>
                      <Unicons.UilShoppingCart color="white" size={20} />Add to Cart
                  </button>
              </div>

          </Flicking>

        </div>
    </section>
  )
}

export default Card