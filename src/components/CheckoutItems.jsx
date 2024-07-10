import React from 'react';
function CheckoutItems({items})
{
  const itemsPrice=  items.price * items.quantity;
  return(
      <tr>
        <td><img src={items.image} alt={items.name} height='100px' width='100px'/></td>
        <td>{items.name}</td>
        <td>{items.quantity}</td>
        <td>{itemsPrice}</td>
      </tr>
  )
}

export default CheckoutItems;