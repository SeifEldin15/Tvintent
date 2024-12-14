import React from 'react'
import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../Loading/Loading';
export default function () {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 10,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:1500
      };
      const [categories, setCategories] = useState([]);

      async function getCategories(){
       let {data} =await axios.get("https://fakestoreapi.com/products");
       setCategories(data);
       console.log(data);
       setLoading(false);
      }
      
      useEffect(()=>{
        getCategories()
      },[])
      const [loading, setLoading] = useState(true)
       if(loading){
       return <Loading/>
       }
  return (
    <div className='container my-3' >
    <h2>Popular shoping</h2><br />
    <Slider {...settings}>
    {
    categories.map((item)=>(
        <div className='px-1'>
            <img src={item.image} className='w-100' height={200} alt={item.title} />
            <h5 className='text-center'>{item.price} EGP</h5>
        </div>
        
    ))
    }
    </Slider>
    </div>
  )
}
