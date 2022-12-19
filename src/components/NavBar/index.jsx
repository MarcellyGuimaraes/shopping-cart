import React, { useContext } from 'react'
import CartContext from '../../context/Cart/CartContext'

const Nav = () => {
  const { cartItems, showHideCart } = useContext(CartContext)

  return (
    <nav>
      <div>store</div>
      <div>
        <div>
          <input type="text" />
          *icon*
        </div>
      </div>
      <div>
        <div onClick={showHideCart}>*carrinho*</div>
        {cartItems.length > 0 && (
          <div>
            <span>{cartItems.length}</span>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Nav
