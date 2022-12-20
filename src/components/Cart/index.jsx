import { useContext } from 'react'
import CartContext from '../../context/Cart/CartContext'
import CartItem from '../CartItem'

const Cart = () => {
  const { showCart, cartItems, showHideCart } = useContext(CartContext)

  return (
    <>
      {showCart && (
        <div className="fixed top-20 right-8 rounded-sm bg-white border border-gray-400 p-1 z-10">
          <div className="flex items-start justify-between">
            <h2
              className="text-lg font-medium text-gray-900"
              id="slide-over-title"
            >
              Carrinho
            </h2>
            <div className="ml-3 flex h-7 items-center">
              <button
                type="button"
                onClick={showHideCart}
                className="-m-2 p-2 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Fechar</span>

                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="h-max max-h-[50vh] w-72 overflow-y-auto">
            {cartItems.length === 0 ? (
              <h4 className="py-5 text-lg font-bold text-black">
                O carrinho está vazio
              </h4>
            ) : (
              <ul>
                {cartItems.map((item, index) => (
                  <CartItem key={item.index} item={item} />
                ))}
              </ul>
            )}
          </div>
          <div className="mt-2 flex justify-between">
            <div>Cart Total</div>
            <div></div>
            <div className="text-green-600">
              R${' '}
              {cartItems
                .reduce((amount, item) => item.price + amount, 0)
                .toFixed(2)}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Cart
