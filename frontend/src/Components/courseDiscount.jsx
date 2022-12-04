import React from "react";
import { useState } from "react";

function Discount(){
 
    const [Discount, setDiscount] = useState('');
    const [Months, setMonths] = useState('');
    

    const handleMonths = event => {
      const result = event.target.value.replace(/\D/g, '');
  
      setMonths(result);
    };
    const handleDiscount = event => {
        const result = event.target.value.replace(/\D/g, '');
    
        setDiscount(result);
      };
    return (
        
            <div id='discountContainer'>
            <h4>Course Name:</h4>
            <image></image>
            <form  action="#" >
          <div className="user-details">
          <div class="material-textfield input-box ">
              <input className="inputt" placeholder=" " type="text" required value={Discount}
        onChange={handleDiscount} />
              <label className="labell">Discount</label>
            </div>
            <div class="material-textfield input-box  ">
              <input className="inputt" placeholder=" " type="text" value={Months}
        onChange={handleMonths}
          />
              <label className="labell">Months</label>
            </div>
            </div>
            <button className="buttoon" type="submit"> Submit
</button>
</form>
            </div>
        
        );
}
export default Discount;