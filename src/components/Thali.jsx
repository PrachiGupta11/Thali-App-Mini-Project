import React, { useState } from 'react';
import './Thali.css';
import {useSelector, useDispatch} from 'react-redux';
import {removeFromThali} from '../Store/Slices/ThaliSlice';
import menuData from '../Menu';
import { useNavigate } from 'react-router-dom';
import ThaliItems from './ThaliItems';
// import ThaliItems from './ThaliItems';

function Thali()
{
  const thali=useSelector(state=>state.thali.thali);
  const dispatch=useDispatch();
  const navigate = useNavigate();

  const goToCheckout=()=>{
    if(thali.length<2)
    {
      alert("add aleast two items")
    }
    else{
       navigate('/Checkout')
    }
   
  }

  const handleRemoveFromThali=(item)=>()=>{
    dispatch(removeFromThali(item));
  }

   let itemList =  menuData.menu.map((data,index)=>{
       return <ThaliItems key={index} data={data}/>
     })
  return(
    <>
    <header>
      <div style={{display:'flex'}}>
       <h1>Khao Thali</h1>
         {thali.map((selectedItem,index)=>(
           <div key={index} style={{marginRight:'10px'}}>
             <img src={selectedItem.image} alt={selectedItem.name} height='100px' width='100px'/> <br/>
             <button onClick={handleRemoveFromThali(index)}>Remove</button> {/* Button to remove item */}
           </div>
         ))}
       </div>
      <div className='icon'>
       <img  src='https://th.bing.com/th/id/OIP.97ePAUfKBnOXU30adjbBmAHaEg?w=294&h=180&c=7&r=0&o=5&pid=1.7' alt='thali-icon' height='40px' width='50px' onClick={goToCheckout}/>
        </div>
    </header>
      <section className='grid-container'>
          {
           
               itemList
        }  
      </section>
      <footer>
        <label style={{fontFamily:"cursive"}}>&copy; 2024 KhaoThali</label>
      </footer>
    </>
  )
}

export default Thali;