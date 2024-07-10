import React, { useState } from 'react';
import {addToThali} from '../Store/Slices/ThaliSlice.js';
import './Thali.css';
import {useDispatch} from 'react-redux';

function ThaliItems({data})
{
  const [quantity,setQuantity] =useState(0)
  
  const dispatch=useDispatch();
  const handleAddToThali=()=>{
    if(quantity)
    {
      let data1 = {...data,quantity}
      dispatch(addToThali(data1))
    }
    else{
      alert(`add quantity of ${data.name}`)
    }
    
  }
  const changeQuantity=(e)=>{
    setQuantity(Number(e.target.value))
  }
  
  return(
    <div className='grid-item'>
            <img src={data.image} alt={data.name} height="200px" width="250px"/> <br/>
            <label>{data.name}</label> <br/>
            <label>₹{data.price}</label>
            <label style={{margin:"10px 5px 0px 40px"}}>Qty:</label>
            <select onChange={changeQuantity}>
              <option>choose</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <br/>
            <button onClick={handleAddToThali}>Add to Thali</button>
    </div>
  )
}

export default ThaliItems;