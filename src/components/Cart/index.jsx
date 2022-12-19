import { useContext } from 'react'
import CartContext from '../../context/Cart/CartContext'

const Cart = () => {
  const { showCart, cartItems, showHideCart } = useContext(CartContext)

  return (
    <>
      {showCart && (
        <div>
          <div>
            <span onClick={showHideCart}>*circle</span>
          </div>
          <div>
            {cartItems.length === 0 ? (
              <h4>Carrinho está vazio</h4>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <CartItemCart key={item._id} item={item} />
                ))}
              </ul>
            )}
          </div>
          <div>
            <div>Cart Total</div>
            <div></div>
            <div>
              {cartItems.reduce((amount, item) => item.price + amount, 0)}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
Cart
export default Cart
