import axios from 'axios';
import  { useEffect, useState } from 'react'
import Container from '../Container';
import Product from './Product';

const ProductList = () => {
  
    let [data,setData] = useState([]);

    useEffect(()=>{
     async function viewData(){
          let allData =await axios.get("https://dummyjson.com/products")
          setData(allData.data.products);
          
      }
      viewData();
    },[]);
    
      
    
  return (
    <>
      <section>
        <div className="">
            <Container>
                <h2 className='text-4xl font-bold py-3 text-center'>Products</h2>
                <div className="flex flex-wrap py-5 gap-3 ">
                    {
                    data.map((item)=>(
                        <Product key={item.id} ImgSrc={item.thumbnail} title={item.title} price={item.price}/>
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
