import React, { useContext } from 'react'
import Rating from '../Rating'
import CartContext from '../../context/Cart/CartContext'

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext)
  return (
    <div>
      <a
        href=""
        className="flex flex-col bg-white drop-shadow hover:drop-shadow-lg hover:opacity-70 rounded-md"
      >
        <img
          src={product.image}
          alt="Fiction Product"
          className="object-cover rounded-tl-md rounded-tr-md"
        />

        <div className="px-3 py-2">
          <h1 className="font-semibold">{product.name}</h1>
          <p className="text-sm">$69.69</p>
          <div>
            <Rating
              value={product.rating}
              text={`${product.numReviews} Reviews`}
            />
          </div>
          <button onClick={() => addToCart(product)}>
            Adicionar ao carrinho
          </button>
        </div>
      </a>
    </div>
  )
}

export default ProductCard
