import React, { useState } from 'react'
import "./View.css"
import Nav from "../../components/nav/Nav";
import { watches} from "../../components/files/Exportfiles"
import Card from "../../components/card/Card"

const Views = () => {

        const [cartItem, setCartItem] = useState(1)
        const [disable, setDisable] = useState(false)
        const handleCountChange =()=>{}
        const handleClickMinus =()=>{
                if(cartItem === 1){
                        setDisable(true)
                } else{
                        setCartItem(cartItem-1)
                        setDisable(false)
                }
        }

        const handleClickPlus =()=>{
                        setCartItem(cartItem+1)
        }

  return (
    <section>
            <Nav/>

        <div className='productViewContainer'>

            <div className='productImgContainer'>

                <div className='viewImgContainer'>
                        <img src={watches.w6} alt='' className='productImg'/>
                </div>

                <div className=''>
                        <div className='productFeatures'>
                           <h3>Name:</h3>
                           <h3>HP laser LP12i32</h3>
                        </div>
                        <div  className='productFeatures'>
                           <h3>Product:</h3>
                           <h3>HP </h3>
                        </div>
                        <div  className='productFeatures'>
                           <h3>Price:</h3>
                           <h3>N138,000</h3>
                        </div>
                        <div  className='productFeatures'>
                           <h3>Size:</h3>
                           <h3>24Inch</h3>
                        </div>
                        <div  className='productFeatures'>
                           <h3>Ram:</h3>
                           <h3>4GB</h3>
                        </div>
                        <div  className='productFeatures'>
                           <h3>Rom:</h3>
                           <h3>500GB</h3>
                        </div>
                        <div  className='productFeatures'>
                           <button disabled={disable} className='btnCountMinus' onClick={handleClickMinus}>-</button>
                           <input type='number' value={cartItem} className='cartCount' onChange={handleCountChange}/>
                           <button className='btnCount' onClick={handleClickPlus}>+</button>
                        </div>
                </div>

            </div>

            <div className='productInfo'>
                <h1>Product other Info</h1>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sit ullam iusto, nam eius minima cumque accusantium maxime fugiat et consectetur doloremque alias ab ipsa suscipit nostrum deserunt neque? Quia, quas magnam iusto dolores, nobis excepturi deleniti praesentium ratione quaerat ad pariatur obcaecati et hic necessitatibus quod quos illum odit nisi voluptas ipsum eius quidem modi. Sunt, doloremque quam magni possimus eveniet pariatur quidem. Blanditiis eaque explicabo quo accusamus vel, illo saepe eligendi aliquid, eius quas ex perferendis ipsa perspiciatis dolorum, tempora aliquam numquam? Mollitia explicabo voluptatem fugiat, maiores repudiandae sapiente, deleniti officiis saepe necessitatibus tempore odit unde magnam sint?
                </p>
            </div>


            <div className='relatedItemContainer'>
                <h1>you might also like</h1>
                <Card/>
            </div>

        </div>

    </section>
  )
}

export default Views