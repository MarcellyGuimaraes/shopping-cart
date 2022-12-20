import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard'

const Home = () => {
  const [products, setProducts] = useState()
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((response) => setProducts(response))
  }, [])

  if (!products) {
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
        <h2 className="text-center text-white text-xl font-semibold">
          Carregando...
        </h2>
        <p className="w-1/3 text-center text-white">
          Talvez isso demore um pouco, não feche a página
        </p>
      </div>
    )
  }

  return (
    <div className="mx-auto mt-32 mb-5 grid w-fit grid-cols-1 justify-center justify-items-center gap-y-20 gap-x-14 md:grid-cols-2 lg:grid-cols-4">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  )
}

export default Home
