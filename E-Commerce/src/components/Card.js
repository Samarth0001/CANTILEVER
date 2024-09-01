import React from 'react'
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Card = ({product}) => {
    let stars = product.rating;
    const totalStars = 5;

    let navigate = useNavigate();

    function clickHandler(){
        navigate(`/product/${product.id}`)
    }

  return (
    <div className='flex flex-col gap-y-2 w-1/4 mx-8' onClick={clickHandler}>
        <img src={product.images[0]} alt= {`${product.type} image`} />
        <p>
            {
                (product.description.length > 100) ? (product.description.substr(0,99) + '...') : (product.description)
            }
        </p>

        <div className='flex '>
            {
                [...Array(stars)].map( (_,index) => (
                    <IoIosStar  key={index}  color='yellow' size={20}/>
                ))
            }
            {

                [...Array(totalStars-stars)].map( (_,index) => (
                    <IoIosStarOutline key={index} color='yellow' size={20}/>
                ))
            }
        </div>

        <p>₹ {product.price}</p>
    </div>
  )
}

export default Card