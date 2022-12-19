import { useContext } from 'react'
import Rating from '../Rating'
import CartContext from '../../context/Cart/CartContext'

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext)

  return (
    <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="p-8 rounded-t-lg" src={product.image} alt="product image" />
      </a>

      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <Rating text={product.rating} />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {product.price}
          </span>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => addToCart(product)}
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
