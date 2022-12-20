import { useContext } from 'react'
import CartContext from '../../context/Cart/CartContext'
import CartItem from '../CartItem'

const Cart = () => {
  const { showCart, cartItems, showHideCart } = useContext(CartContext)

  return (
    <>
      {showCart && (
        <div className="fixed top-20 right-8 rounded-sm bg-white border border-gray-400 p-1 z-10">
          <div>
            <span onClick={showHideCart}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </div>
          <div className="h-max max-h-[50vh] overflow-y-auto">
            {cartItems.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <CartItem key={item._id} item={item} />
                ))}
              </ul>
            )}
          </div>
          <div className="mt-2 flex justify-between">
            <div>Cart Total</div>
            <div></div>
            <div style={{ marginLeft: 5 }}>
              {cartItems.reduce((amount, item) => item.price + amount, 0)}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Cart
