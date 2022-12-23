import React from 'react'
import "./pruchercourse.css"

function Pruchercourse() {
  return (
    <div class = "body">
        <div class="card">
            <div class="card-top border-bottom text-center">
                 <a href="coursedetails"> Back to shop</a>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-7">
                        <div class="left border">
                            <div class="row">
                                <span class="header">Payment</span>
                                <div class="icons">
                                    <img src="https://img.icons8.com/color/48/000000/visa.png"/>
                                    <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png"/>
                                    <img src="https://img.icons8.com/color/48/000000/maestro.png"/>
                                </div>
                            </div>
                            <form>
                                <span>Cardholder's name:</span>
                                <input placeholder="Linda Williams"/>
                                <span>Card Number:</span>
                                <input placeholder="0125 6780 4567 9909"/>
                                <div class="row">
                                    <div class="col-4"><span>Expiry date:</span>
                                        <input placeholder="YY/MM"/>
                                    </div>
                                    <div class="col-4"><span>CVV:</span>
                                        <input id="cvv"/>
                                    </div>
                                </div>
 
                            </form>
                        </div>                        
                    </div>
                    <div class="col-md-5">
                        <div class="right border">
                            <div class="header">Order Summary</div>
                            <div class="row item">
                                <div class="col-4 align-self-center"><img class="img-fluid" src="https://i.imgur.com/79M6pU0.png"/></div>
                                <div class="col-8">
                                    <div class="row"><b>$ 26.99</b></div>
                                    <div class="row text-muted">Be Legandary Lipstick-Nude rose</div>
                                </div>
                            </div>
                            <hr></hr>
                            <div class="row lower">
                                <div class="col text-left">Subtotal</div>
                                <div class="col text-right">$ 46.98</div>
                            </div>
                            <div class="row lower">
                                <div class="col text-left">Promotion</div>
                                <div class="col text-right">0$</div>
                            </div>
                            <div class="row lower">
                                <div class="col text-left"><b>Total to pay</b></div>
                                <div class="col text-right"><b>$ 46.98</b></div>
                            </div>
                            <button class="btn">Place order</button>
                            <p class="text-muted text-center">Complimentary Shipping & Returns</p>
                        </div>
                    </div>
                </div>
            </div>
            
         <div>
        </div>
        </div>
    </div>
  )
}

export default Pruchercourse