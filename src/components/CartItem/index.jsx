import React, { useContext } from 'react'
import CartContext from '../../context/Cart/CartContext'

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext)

  return (
    <li>
      <img src={item.image} alt="" />
      <div>
        {item.name} {item.price}
      </div>
      <button onClick={() => removeItem(item._id)}>Remover item</button>
    </li>
  )
}

export default CartItem
