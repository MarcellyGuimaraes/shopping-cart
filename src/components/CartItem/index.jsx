import { useContext } from 'react'
import CartContext from '../../context/Cart/CartContext'

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext)
  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={item.image}
          alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href="#">{item.name}</a>
            </h3>
          </div>
          <p className="mt-1 text-sm text-gray-500">R${item.price}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={() => removeItem(item._id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default CartItem
