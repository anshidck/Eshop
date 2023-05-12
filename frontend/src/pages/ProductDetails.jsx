import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductById } from '../features/item/productSlice';
import Spinner from '../components/Spinner'
import Rating from '../components/Rating';

const ProductDetails = ({ productId }) => {
  const dispatch = useDispatch();
  const { product, isLoading, isError, message } = useSelector((state) => state.item);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    dispatch(fetchProductById(productId));
  }, [dispatch, isError, message, productId]);

  if (isLoading) {
    return <Spinner/>;
  }

  return (
    <div >
      {product ? (
        <div className='grid md:grid-cols-4 text-black p-9 gap-3'>
          <div className='col-span-2 border '>
            <img className='max-h-[550px] w-full object-cover' src={product.image} alt={product.name} />
          </div>
          <div className='col-span-2 rounded  bg-white  p-5'>  
              <h1 className='text-3xl font-bold border-b-4 border-yellow-500 py-2'>{product.name}</h1>
              <p className='md:text-sm font-semibold py-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
               ut labore et dolore magna aliqua. Ut enim ad minim veniam,
               quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
               Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                  magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                   qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
                   sed quia non numquam eius modi tempora incidunt ut labore et 
                   dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis 
                   nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam 
                    nihil molestiae consequatur,
              </p>
              <div>
          <Rating rating={product.rating} numReviews={product.numReviews}/> 
              <p className='py-2 text-black'>{product.description}</p>
              <p className='flex justify-between font-bold text-lg'>$ {product.price}</p>
              <p className='flex gap-3 py-2'>status: <span>{product.countInStock > 0 ? (<p className='bg-green-500 text-white rounded px-2'>in Stock</p>): (<p className='bg-red-600 text-white rounded px-2'>not stock</p>)}</span></p>
              {product.countInStock > 0 ? (
              <button className=' bg-black text-yellow-500 my-4 p-2 px-4 rounded font-bold'>Add to Cart</button>
              ) : (<button>out of stock</button>)}
          </div>
                  
          </div>
         
        </div>
      ) : (
        <div>Product not found</div>
      )}
    </div>
  );
};

export default ProductDetails;
