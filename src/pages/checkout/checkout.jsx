import React from 'react'
import cardImages from '../../assets/card-images/card_img.png'
import "./checkout.css"

const Checkout = () => {
  return (
    
    <div className='checkout'>
        <h1>Payment Details</h1>

        <div class="container">

            <form action="">

                <div class="row">

                    <div class="col">

                        <h3 class="title">billing address</h3>

                        <div class="inputBox">
                            <span>full name :</span>
                            <input type="text" placeholder="Jon Doe" />
                        </div>
                        <div class="inputBox">
                            <span>email :</span>
                            <input type="email" placeholder="example@example.com" />
                        </div>
                        <div class="inputBox">
                            <span>address :</span>
                            <input type="text" placeholder="room - street - locality" />
                        </div>
                        <div class="inputBox">
                            <span>city :</span>
                            <input type="text" placeholder="lagos" />
                        </div>

                        <div class="flex">
                            <div class="inputBox">
                                <span>state :</span>
                                <input type="text" placeholder="Nigeria" />
                            </div>
                            <div class="inputBox">
                                <span>zip code :</span>
                                <input type="text" placeholder="123 456" />
                            </div>
                        </div>

                    </div>

                    <div class="col">

                        <h3 class="title">payment</h3>

                        <div class="inputBox">
                            <span>cards accepted :</span>
                            <img src={cardImages} alt="payment-cards" />
                        </div>
                        <div class="inputBox">
                            <span>name on card :</span>
                            <input type="text" placeholder="mr. john deo" />
                        </div>
                        <div class="inputBox">
                            <span>credit card number :</span>
                            <input type="number" placeholder="1111-2222-3333-4444" />
                        </div>
                        <div class="inputBox">
                            <span>exp month :</span>
                            <input type="text" placeholder="january" />
                        </div>

                        <div class="flex">
                            <div class="inputBox">
                                <span>exp year :</span>
                                <input type="number" placeholder="2022" />
                            </div>
                            <div class="inputBox">
                                <span>CVV :</span>
                                <input type="text" placeholder="1234" />
                            </div>
                        </div>

                    </div>
            
                </div>

                <input type="submit" value="proceed to checkout" class="submit-btn" />

            </form>

        </div>  
    </div>  
  )
}

export default Checkout