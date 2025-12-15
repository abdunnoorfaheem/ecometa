import axios from 'axios';
import  { useEffect, useState } from 'react'
import Container from '../Container';

const ProductList = () => {
    let [data,setData] = useState([]);

    useEffect(()=>{
     async function viewData(){
          let allData =await axios.get("https://dummyjson.com/products")
          setData(allData.data.products);
          
      }
      viewData();
    },[])
  return (
    <>
      <section>
        <div className="">
            <Container>
                <h2 className='text-4xl font-bold py-3 text-center'>Products</h2>
                <div className="flex flex-wrap py-5 gap-3 ">
                    {
                    data.map((item)=>(
                        <div className="md:w-[24%] w-full text-center shadow-2xl px-6 py-4 rounded-2xl ">
                            <div className="">
                                <img src={item.thumbnail} alt="" />
                            </div>
                            <h3>{item.title}</h3>
                            <h5>Price : ${item.price}</h5>
                            <button className='text-2xl bg-slate-700 text-white w-full py-2 cursor-pointer font-medium'>Add to Cart</button>
                        </div>
                    ))
                }
                </div>
            </Container>
        </div>
      </section>

    </>
  )
}

export default ProductList
