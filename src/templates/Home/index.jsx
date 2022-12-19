import React from 'react'
import products from '../../assets/data'
import ProductCard from '../../components/ProductCard'

const Home = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  )
}

export default Home
