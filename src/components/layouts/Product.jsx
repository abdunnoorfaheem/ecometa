import { useDispatch } from 'react-redux'
import { addtocart } from '../../slices/addToCartSlice';

const Product = ({ImgSrc,title,price}) => {
    let dispatch = useDispatch();

    let handleAddToCart = ()=>{
        dispatch(addtocart({
            title:title,
            Image:ImgSrc,
            price:price,
            quantity:1
        }))
    }

  return (

    <>
      <div className="md:w-[24%] w-full text-center shadow-2xl px-6 py-4 rounded-2xl " >
                            <div className="">
                                <img src={ImgSrc} alt="" />
                            </div>
                            <h3 className='text-xl font-bold'>{title}</h3>
                            <h5 className=''>Price : ${price}</h5>
                            <button className='text-2xl bg-slate-700 text-white w-full py-2 cursor-pointer font-medium' onClick={handleAddToCart}>Add to Cart</button>
                        </div>
    </>
  )
}

export default Product
