import React from 'react'
import Nav from '../../components/nav/Nav'
import "./Homepage.css"
import {Fade}  from "react-reveal"
import * as Unicons from "@iconscout/react-unicons"
import Collections from '../../components/collections/Collections'
import Card from '../../components/card/Card'

import watch from "../../assets/w1.png"
import { gens, laps, refs, sneakers, tels, watches } from '../../components/files/Exportfiles'
import Flicking from '@egjs/react-flicking'
import "@egjs/react-flicking/dist/flicking.css";




const Homepage = () => {

  const handleSearch= ()=>{}
  const handlesearchSubmit= (e)=>{e.preventDefault()}

  return (
    <section>
      <Nav/>

      <div className='searchBarContainer'>

            <div className='formInfo'>
                <Fade left>
                    <h1>O-COMMERCE</h1>
                </Fade>
                <Fade right>
                    <h3>HOME FOR YOUR ELECTRONICS</h3>
                </Fade>
            </div>

          <form onSubmit={handlesearchSubmit}>
              <Fade left>
                  <input type='text' className='searchInput' onChange={handleSearch} placeholder='Search your product here...' name=''/>
              </Fade>
              <Fade right>
                  <input type='submit' className='searchBtn' value={"Search"}/>
              </Fade>
          </form>
      </div>

      <div className='homeFlyerContainer'>

        <div className='homeBanner'>
        <Flicking circular={true}>
            <div className='bannerImgContainer'>
                <img src={tels.tb1} alt='' className='bannerImg'/>
            </div>

            <div className='bannerImgContainer'>
                <img src={watches.wb1} alt='' className='bannerImg'/>
            </div>

            <div className='bannerImgContainer'>
                <img src={tels.tb2} alt='' className='bannerImg'/>
            </div>

            <div className='bannerImgContainer'>
                <img src={watches.wb2} alt='' className='bannerImg'/>
            </div>

            <div className='bannerImgContainer'>
                <img src={sneakers.sb1} alt='' className='bannerImg'/>
            </div>

            <div className='bannerImgContainer'>
                <img src={laps.pc2} alt='' className='bannerImg'/>
            </div>
            <div className='bannerImgContainer'>
                <img src={sneakers.sb2} alt='' className='bannerImg'/>
            </div>

        </Flicking>
        </div>
        
      </div>

      <div className='featuresContainer'>

          <div className='featureItems'>
             <Unicons.UilTruck size={40} />
              <div>
                <h3>Quick & Reliable Delivery</h3>
                <p>We deliver across the nation</p>
              </div>
          </div>

          <div className='featureItems'>
             <Unicons.UilCardAtm size={40} />
              <div>
                <h3>Save Payment</h3>
                <p>Pay via our website</p>
              </div>
          </div>

          <div className='featureItems'>
             <Unicons.UilHeadphones size={40} />
              <div>
                <h3>24/7 Support available </h3>
                <p>We deliver across the nation</p>
              </div>
          </div>
          
          <div className='featureItems'>
             <Unicons.UilMobileAndroidAlt size={40} />
              <div>
                <h3>Shop with our App</h3>
                <p>We deliver across the nation</p>
              </div>
          </div>

      </div>

      <Collections/>

      <div className='adsContainer'>
          <div className='adBannerOne'>
              <img src={gens.gb2} alt='' className='adsImg'/>
          </div>
          <div className='adBannerTwo'>
               <img src={gens.gb1} alt='' className='adsImg'/>
          </div>
      </div>

      <div className='cardController'>
        <h1>NEWEST ARRIVAL</h1>
           <Card watch={watch}/>
      </div>

      <div className='adsContainer'>
          <div className='adBannerOne'>
              <img src={laps.pc1} alt='' className='adsImg'/>
          </div>
          <div className='adBannerTwo'>
              <img src={laps.pc2} alt='' className='adsImg'/>
          </div>
      </div>


      <div className='cardController'>
        <h1>BEST PRICE</h1>
         <Card watch={watch}/>
      </div>

      <div className='adsContainer'>
          <div className='adBannerOne'>
              <img src={refs.rb1} alt='' className='adsImg'/>
          </div>
          <div className='adBannerTwo'>
              <img src={refs.rb2} alt='' className='adsImg'/>
          </div>
     </div>

     <div className='cardController'>
        <h1>TOP BRANDS</h1>
         <Card watch={watch}/>
      </div>


      <div className='adsContainer'>
          <div className='adBannerOne'>
              <img src={sneakers.sb1} alt='' className='adsImg'/>
          </div>
          <div className='adBannerTwo'>
              <img src={sneakers.sb2} alt='' className='adsImg'/>
          </div>
      </div>


      <div className='cardController'>
        <h1>POPULAR</h1>
        <Card watch={watch}/>
      </div>

      <div className='adsContainer'>
      <div className='adBannerOne'>
          <img src={tels.tb1} alt='' className='adsImg'/>
      </div>
      <div className='adBannerTwo'>
          <img src={tels.tb2} alt='' className='adsImg'/>
      </div>
  </div>


  <div className='cardController'>
        <h1>SPECIALS</h1>
        <Card watch={watch}/>
    </div>



    </section>
  )
}

export default Homepage