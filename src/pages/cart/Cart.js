import React, { useEffect, useState } from 'react'
import Nav from "../../components/nav/Nav"
import { watches } from '../../components/files/Exportfiles'
import "./Cart.css"
import { Link } from 'react-router-dom'




const Cart = () => {


  const [cartItem, setCartItem] = useState(1)
  const [price, setPrice] = useState(12000 * cartItem)

  const [disable, setDisable] = useState(false)

  const handleCountChange =(e)=>{setCartItem(e.target.value)}
  const handleCartChange =()=>{}


  const handleCartSubmit =(e)=>{e.preventDefault()}


  const handleDelete =()=>{}
  const handlePayment =()=>{}

  const handleClickMinus =()=>{
          if(cartItem === 1){
                  setDisable(true)
          } else{
                  setCartItem(cartItem-1)
                  setPrice(cartItem * price)
                  setDisable(false)
          }
  }

  const handleClickPlus =()=>{
       setCartItem(cartItem+1)
       setPrice(cartItem * price)
  }

  useEffect(()=>{},[cartItem, price])



  return (
    <section>
      <Nav/>
      <div className='cartContainer'>

          <div className='carItemContainer'>

              <div className='cartItemCard'>
                  <Link to={""}>
                    <img src={watches.w2} alt='' className='cartItemImg'/>
                  </Link>
                  <div className='carItemInfo'>
                      <h3>Panasonic Android Tv</h3>
                      <div  className='cartItemCount'>
                        <button disabled={disable} className='cartItemCountMinus' onClick={handleClickMinus}>-</button>
                        <input type='number' value={cartItem} className='cartCount' onChange={handleCountChange}/>
                        <button className='cartItemCountPlus' onClick={handleClickPlus}>+</button>
                      </div>
                      <div className='btnGrpCon'>
                          <button onClick={handleDelete} className='btnDeleteCart'>Delete</button>
                          <button onClick={handlePayment} className='btnBuyCart'>Buy now</button>
                      </div>
                  </div>

                  <div className='priceTagContainer'>
                      <h3>N{price}</h3>
                   </div>
              </div>
              
              <div className='cartItemCard'>
                  <Link to={""}>
                    <img src={watches.w2} alt='' className='cartItemImg'/>
                  </Link>
                  <div className='carItemInfo'>
                      <h3>Panasonic Android Tv</h3>
                      <div  className='cartItemCount'>
                        <button disabled={disable} className='cartItemCountMinus' onClick={handleClickMinus}>-</button>
                        <input type='number' value={cartItem} className='cartCount' onChange={handleCountChange}/>
                        <button className='cartItemCountPlus' onClick={handleClickPlus}>+</button>
                      </div>
                      <div className='btnGrpCon'>
                          <button onClick={handleDelete} className='btnDeleteCart'>Delete</button>
                          <button onClick={handlePayment} className='btnBuyCart'>Buy now</button>
                      </div>
                  </div>

                  <div className='priceTagContainer'>
                      <h3>N{price}</h3>
                   </div>
              </div>

              <div className='cartItemCard'>
                  <Link to={""}>
                    <img src={watches.w2} alt='' className='cartItemImg'/>
                  </Link>
                  <div className='carItemInfo'>
                      <h3>Panasonic Android Tv</h3>
                      <div  className='cartItemCount'>
                        <button disabled={disable} className='cartItemCountMinus' onClick={handleClickMinus}>-</button>
                        <input type='number' value={cartItem} className='cartCount' onChange={handleCountChange}/>
                        <button className='cartItemCountPlus' onClick={handleClickPlus}>+</button>
                      </div>
                      <div className='btnGrpCon'>
                          <button onClick={handleDelete} className='btnDeleteCart'>Delete</button>
                          <button onClick={handlePayment} className='btnBuyCart'>Buy now</button>
                      </div>
                  </div>

                  <div className='priceTagContainer'>
                      <h3>N{price}</h3>
                   </div>
              </div>

              <div className='cartItemCard'>
                  <Link to={""}>
                    <img src={watches.w2} alt='' className='cartItemImg'/>
                  </Link>
                  <div className='carItemInfo'>
                      <h3>Panasonic Android Tv</h3>
                      <div  className='cartItemCount'>
                        <button disabled={disable} className='cartItemCountMinus' onClick={handleClickMinus}>-</button>
                        <input type='number' value={cartItem} className='cartCount' onChange={handleCountChange}/>
                        <button className='cartItemCountPlus' onClick={handleClickPlus}>+</button>
                      </div>
                      <div className='btnGrpCon'>
                          <button onClick={handleDelete} className='btnDeleteCart'>Delete</button>
                          <button onClick={handlePayment} className='btnBuyCart'>Buy now</button>
                      </div>
                  </div>

                  <div className='priceTagContainer'>
                      <h3>N{price}</h3>
                   </div>
              </div>

              <div className='cartItemCard'>
                  <Link to={""}>
                    <img src={watches.w2} alt='' className='cartItemImg'/>
                  </Link>
                  <div className='carItemInfo'>
                      <h3>Panasonic Android Tv</h3>
                      <div  className='cartItemCount'>
                        <button disabled={disable} className='cartItemCountMinus' onClick={handleClickMinus}>-</button>
                        <input type='number' value={cartItem} className='cartCount' onChange={handleCountChange}/>
                        <button className='cartItemCountPlus' onClick={handleClickPlus}>+</button>
                      </div>
                      <div className='btnGrpCon'>
                          <button onClick={handleDelete} className='btnDeleteCart'>Delete</button>
                          <button onClick={handlePayment} className='btnBuyCart'>Buy now</button>
                      </div>
                  </div>

                  <div className='priceTagContainer'>
                      <h3>N{price}</h3>
                   </div>
              </div>

              <div className='cartItemCard'>
                  <Link to={""}>
                    <img src={watches.w2} alt='' className='cartItemImg'/>
                  </Link>
                  <div className='carItemInfo'>
                      <h3>Panasonic Android Tv</h3>
                      <div  className='cartItemCount'>
                        <button disabled={disable} className='cartItemCountMinus' onClick={handleClickMinus}>-</button>
                        <input type='number' value={cartItem} className='cartCount' onChange={handleCountChange}/>
                        <button className='cartItemCountPlus' onClick={handleClickPlus}>+</button>
                      </div>
                      <div className='btnGrpCon'>
                          <button onClick={handleDelete} className='btnDeleteCart'>Delete</button>
                          <button onClick={handlePayment} className='btnBuyCart'>Buy now</button>
                      </div>
                  </div>

                  <div className='priceTagContainer'>
                      <h3>N{price}</h3>
                   </div>
              </div>

           
           
          </div>
          
          <div className='carItemBoardContainer'>

              <div className='totalProductContainer'>
              
                  <div className='totalCartPriceContainer'>
                      <h3>Total Items</h3>
                      <h3>17</h3>
                  </div>
                  
                  <div className='totalCartPriceContainer'>
                      <h3>Delivery fee</h3>
                      <h3>1,000</h3>
                  </div>
                  <div className='totalCartPriceContainer'>
                      <h3>Total amount</h3>
                      <h3>1,000</h3>
                  </div>

                  <div className='cartPaymentformContainer'>
                        <form onSubmit={handleCartSubmit}>
                          <div className='inputCartContainer'>
                              <input type='text' className='cartInput' placeholder='Enter your Full name...' name='' onChange={handleCartChange}/>
                          </div>
                          <div className='inputCartContainer'>
                              <input type='email' className='cartInput' placeholder='Enter your Email...' name='' onChange={handleCartChange}/>
                          </div>
                          <div className='inputCartContainer'>
                              <input type='tel' className='cartInput' placeholder='Enter your mobile no...' name='' onChange={handleCartChange}/>
                          </div>
                          <div className='inputCartContainer'>
                              <input type='text' className='cartInput' placeholder='Enter your state...' name='' onChange={handleCartChange}/>
                          </div>
                          <div className='inputCartContainer'>
                              <input type='text' className='cartInput' placeholder='Nearest landmark...' name='' onChange={handleCartChange}/>
                          </div>
                          <div className='inputCartContainer'>
                              <input type='submit' className='cartFormBtn' value='Checkout'/>
                          </div>
                        </form>
                  </div>
        
              </div>
          </div>

      </div>
    </section>
  )
}

export default Cart