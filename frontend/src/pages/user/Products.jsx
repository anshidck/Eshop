import { useSelector } from 'react-redux'
import Card from '../../components/user/Card'
import Spinner from '../../components/Spinner'

function Products() {
  const { products, isLoading, isError, message } = useSelector((state) => state.products)
  if (isLoading) {
    return <Spinner/>
  }

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 w-[85%] mx-auto my-10'>
       {products.map((product) => (
        <Card key={product._id} product={product} productId={product._id}/>
       ))}
    </div>
  )
}

export default Products