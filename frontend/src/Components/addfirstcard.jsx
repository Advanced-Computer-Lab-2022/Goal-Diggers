import React from 'react'
<link rel="stylesheet" href="temp.css" />
function Addfirstcard() {
  return (
    <div>
        <button type="button" class="btn btn-primary launch2" data-toggle="modal" data-target="#staticBackdrop"> <i class="fa fa-rocket"></i> Pay Now
    </button>
    <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true"> 
        <div class="modal-dialog"> 
            <div class="modal-content"> 
                <div class="modal-body2"> <div class="text-right"> 
                    <i class="fa fa-close close" data-dismiss="modal"></i> 
                </div> 
                <div class="tabs mt-3"> 
                    <ul class=" nav-tabs2" id="myTab" role="tablist"> 
                        <li class="nav-item2" role="presentation"> 
                            <a class="nav-link2 active" id="visa-tab" data-toggle="tab" href="#visa" role="tab" aria-controls="visa" aria-selected="true"> <img src="https://i.imgur.com/sB4jftM.png" width="80"/> </a>
                         </li> 
                         <li class="nav-item2" role="presentation"> 
                            <a class="nav-link2" id="paypal-tab" data-toggle="tab" href="#paypal" role="tab" aria-controls="paypal" aria-selected="false"> <img src="https://i.imgur.com/yK7EDD1.png" width="80"/> </a> 
                        </li> 
                    </ul> 
                    <div class="tab-content" id="myTabContent"> 
                        <div class="tab-pane fade show active" id="visa" role="tabpanel" aria-labelledby="visa-tab"> 
                            <div class="mt-4 mx-4"> 
                                <div class="text-center"> 
                                    <h5>Credit card</h5>
                                 </div> <div class="form mt-3">
                                     <div class="inputbox2"> 
                                        <input type="text" name="name" class="form-control2" required="required"/>
                                         <span>Cardholder Name</span>
                                    </div> 
                                         <div class="inputbox2"> 
                                            <input type="text" name="name" min="1" max="999" class="form-control2" required="required"/> 
                                            <span>Card Number</span> <i class="fa fa-eye"></i>
                                         </div> 
                                         <div class="d-flex flex-row">
                                             <div class="inputbox2"> 
                                                <input type="text" name="name" min="1" max="999" class="form-control2" required="required"/> 
                                                <span>Expiration Date</span> </div> <div class="inputbox2"> 
                                                    <input type="text" name="name" min="1" max="999" class="form-control2" required="required"/>
                                                     <span>CVV</span> 
                                                    </div>
                                                 </div> 
                                                 <div class="px-5 pay2"> 
                                                    <button class="btn btn-success btn-block">Add card</button>
                                                 </div> 
                                                </div> 
                                            </div>
                                         </div> 
                                         <div class="tab-pane fade" id="paypal" role="tabpanel" aria-labelledby="paypal-tab">
                                             <div class="px-5 mt-5"> 
                                                <div class="inputbox2"> 
                                                    <input type="text" name="name" class="form-control2" required="required"/> 
                                                    <span>Paypal Email Address</span> 
                                                </div>
                                                 <div class="pay2 px-5"> 
                                                    <button class="btn btn-primary btn-block">Add paypal</button>
                                                 </div>
                                                 </div>
                                                 </div> 
                                                </div> 
                                            </div> 
                                        </div> 
                                    </div>
                                 </div>
    </div></div>
  )
}

export default Addfirstcard