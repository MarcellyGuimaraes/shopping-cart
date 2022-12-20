import { useContext } from 'react'
import CartContext from '../../context/Cart/CartContext'

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext)
  return (
    <li className="mt-1 flex h-24 list-none items-center gap-1 border-b border-gray-400 px-1">
      <img className="h-full w-[100px] object-cover" src={item.image} alt="" />
      <div>
        {item.name} {item.price}
      </div>
      <button
        className="ml-auto px-2 py-4 border-none cursor-pointer rounded-md"
        onClick={() => removeItem(item._id)}
      >
        Remove
      </button>
    </li>
  )
}

export default CartItem
