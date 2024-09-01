import React from 'react'
import './Slider.css'

const Slider = ({sliderPrice , handleMinPriceChange , handleMaxPriceChange}) => {
  return (
    
    <div className="price-slider-container">
        <div className="slider-values">
            <span>₹{sliderPrice.minPrice}  - </span>
            <span className='ml-1'>₹{sliderPrice.maxPrice}</span>
        </div>
        <input
            type="range"
            min={0}
            max={200000}
            step={500}
            value={sliderPrice.minPrice}
            className="slider"
            id="minPriceRange"
            onChange={handleMinPriceChange}
        />
        <input
            type="range"
            min={0}
            max={200000}
            step={500}
            value={sliderPrice.maxPrice}
            className="slider"
            id="maxPriceRange"
            onChange={handleMaxPriceChange}
        />
    </div>
  )
}

export default Slider