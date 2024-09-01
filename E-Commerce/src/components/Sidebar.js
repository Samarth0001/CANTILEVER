import React, { useState } from 'react'
import Slider from './Slider'

const Sidebar = ({ checkboxChangeHandler , filters , laptopBrands, phoneBrands , headphoneBrands ,setFilters , radioChangeHandler}) => {

  const [sliderPrice,setSliderPrice] = useState({
    minPrice : 0,
    maxPrice : 200000
  })

  function handleMinPriceChange(event) {
    const value = Math.min(event.target.value, sliderPrice.maxPrice - 1000);
    setSliderPrice((prevValue) => ({
      ...prevValue,
        minPrice: value,
    }));
  }
  
  function handleMaxPriceChange(event) {
    const value = Math.max(event.target.value, sliderPrice.minPrice + 1000);
    setSliderPrice((prevValue) => ({
      ...prevValue,
        maxPrice: value,
    }));
  }

  function clickHandler(){

    setFilters( (prevFilters) => (
      {
      ...prevFilters,
      price : {
        minPrice : sliderPrice.minPrice,
        maxPrice : sliderPrice.maxPrice
      }
      }
    ))
  }

  return (
    <div className='w-1/4 mt-[90px] ml-5 pl-10 pr-10 py-5 bg-orange-50 rounded-2xl h-min '>
      {/* Filtering Options */}
      <div>
      <h2 className='font-bold text-md'>Filtering Options</h2>
      {/* Category Section */}
        <div>
            <p className='mt-2 font-semibold'>Category</p>
            <input type='checkbox' id='laptops' name='categories' value="laptop" className='ml-4' onChange={checkboxChangeHandler}></input>
            <label htmlFor='laptops'>Laptops</label> <br/> 
            <input type='checkbox' id='phones' name='categories' value="phone" className='ml-4' onChange={checkboxChangeHandler}></input>
            <label htmlFor='phones'>Mobile Phones</label> <br/> 
            <input type='checkbox' id='headphones' name='categories' value="headphone" className='ml-4' onChange={checkboxChangeHandler}></input>
            <label htmlFor='headphones'>Headphones</label>  
        </div>

      {/* Brand Section */}
        <div>
            <p className='mt-2 font-semibold'>Brand</p>
            {/* For laptop brand section */}
            {
              (filters.categories.length === 0 || filters.categories.includes('laptop')) &&
              (
                <div className='ml-4'>Laptop Brands</div>
              )
            }
            <div className='grid grid-cols-2'>
            {
              (filters.categories.length === 0 || filters.categories.includes('laptop')) &&
              (
                laptopBrands.map( (brand) => {
                  return(
                    <div key={brand}>
                    <input 
                      type='checkbox' 
                      id={brand} 
                      name='brands' 
                      value={brand} 
                      className='ml-10' 
                      onChange={checkboxChangeHandler} 
                    />
                    <label htmlFor={brand}>{brand}</label>
                    <br/> 
                  </div>
                  )
                })
              )
            }
            </div>

            {/* For mobile brands */}
            {
              (filters.categories.length === 0 || filters.categories.includes('phone')) &&
              (
                <div className='ml-4'>Phone Brands</div>
              )
            }
            <div className='grid grid-cols-2' >
            {
              (filters.categories.length === 0 || filters.categories.includes('phone')) &&
              (
                phoneBrands.map( (brand) => {
                  return(
                    <div key={brand}>
                    <input 
                      type='checkbox' 
                      id={brand} 
                      name='brands' 
                      value={brand} 
                      className='ml-10' 
                      onChange={checkboxChangeHandler} 
                    />
                    <label htmlFor={brand}>{brand}</label>
                    <br/> 
                  </div>
                  )
                })
              )
            }
            </div>

             {/* For headphone brands */}
             {
              (filters.categories.length === 0 || filters.categories.includes('headphone')) &&
              (
                <div className='ml-4'>Headphone Brands</div>
              )
            }
            <div className='grid grid-cols-2' >
            {
              (filters.categories.length === 0 || filters.categories.includes('headphone')) &&
              (
                headphoneBrands.map( (brand) => {
                  return(
                    <div key={brand}>
                    <input 
                      type='checkbox' 
                      id={brand} 
                      name='brands' 
                      value={brand} 
                      className='ml-10' 
                      onChange={checkboxChangeHandler} 
                    />
                    <label htmlFor={brand}>{brand}</label>
                    <br/> 
                  </div>
                  )
                })
              )
            }
            </div>
             
        </div>
        
      {/* Price Section */}
      <div>
        <p className='mt-2 font-semibold'>Price</p>
        <div className='flex gap-x-0'>
          <Slider sliderPrice={sliderPrice} handleMinPriceChange={handleMinPriceChange} handleMaxPriceChange={handleMaxPriceChange}/>
          <button
          className='ml-[60px] mt-6 bg-richblack-900 text-white py-[6px] px-[20px] rounded-[8px] border border-richblack-700'
          onClick={clickHandler}>
            Go</button>
        </div>
      </div>
    </div>

    {/* Sorting Options */}
    <div>
      <h2 className='font-bold text-md mt-4'>Sorting Options</h2>

      {/* Sorting on basis of price */}
      <input type='radio' name='sort' id='none' value="none" onChange={radioChangeHandler}></input>
      <label htmlFor='none'>None</label>4

      <p>Price</p>
      <div className='grid grid-cols-2'>
        <div>
          <input type='radio' name='sort' id='priceAsc' value="priceAsc" onChange={radioChangeHandler}></input>
          <label htmlFor='priceAsc'>Inc to Dec</label>
          </div>
          <div>
          <input type='radio' name='sort' id='priceDsc' value="priceDsc" onChange={radioChangeHandler}></input>
          <label htmlFor='priceDsc'>Dec to Inc</label>
          </div>
      </div>

      <p>Rating</p>
      <div className='grid grid-cols-2'>
        <div>
          <input type='radio' name='sort' id='ratingAsc' value="ratingAsc" onChange={radioChangeHandler}></input>
          <label htmlFor='ratingAsc'>Inc to Dec</label>
          </div>
          <div>
          <input type='radio' name='sort' id='ratingDsc' value="ratingDsc" onChange={radioChangeHandler}></input>
          <label htmlFor='ratingDsc'>Dec to Inc</label>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Sidebar