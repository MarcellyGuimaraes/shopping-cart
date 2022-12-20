import React, { useEffect, useState } from 'react'
// import products from '../../assets/data'
import ProductCard from '../../components/ProductCard'

const Home = () => {
  const [products, setProducts] = useState()
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((response) => setProducts(response))
  }, [])
  if (!products) return null

  return (
    <div className="mx-auto mt-32 mb-5 grid w-fit grid-cols-1 justify-center justify-items-center gap-y-20 gap-x-14 md:grid-cols-2 lg:grid-cols-4">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  )
}

export default Home
