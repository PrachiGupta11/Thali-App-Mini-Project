import {useSelector} from 'react-redux';
import {addToThali} from '../Store/Slices/ThaliSlice.js';
import { Link } from 'react-router-dom';
import './Checkout.css'
import CheckoutItems from './CheckoutItems';

function Checkout()
{
  const thali=useSelector((state)=>state.thali.thali);
  console.log(thali);
  return(
    <>
      <div className='header'>
        <h1>Checkout List</h1>
        <Link to='/' className='nav-link'>Go to Menu</Link>
      </div>
      <div className='item-list'>
        <table>
           <thead>
             <tr>
               <td>Dish</td>
               <td>Dish Name</td>
               <td>Quantity</td>
               <td>Price</td>               
             </tr>
           </thead>
          <tbody>
               {
                 thali.map((item,index)=>(
                    <CheckoutItems key={index} items={item}/>
                 )
               )}
            
           </tbody>
        </table>
        <label>Total Price:</label>
      </div>
    </>
  )
}
export default Checkout;