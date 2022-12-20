import React, { useContext } from 'react'
import CartContext from '../../context/Cart/CartContext'

const Nav = () => {
  const { cartItems, showHideCart } = useContext(CartContext)

  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-center bg-slate-800 p-5 text-white">
      <div className="flex-1">Shopping</div>
      <div className="flex-1 text-slate-300">
        <div className="items-center justify-center rounded-full bg-white">
          <input className="w-full rounded-full border-none p-1" type="text" />
        </div>
      </div>
      <div className="flex-1">
        <div
          className="relative w-max ml-auto flex items-center justify-center"
          onClick={showHideCart}
        >
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
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          {cartItems.length > 0 && (
            <div className="absolute grid place-items-center bg-red-500 z-10 rounded-full text-xs h-4 w-4 bottom-3 left-3">
              <span>{cartItems.length}</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Nav
