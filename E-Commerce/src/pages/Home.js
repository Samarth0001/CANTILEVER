import React, { useEffect, useState } from 'react'
import Featured from '../components/Featured'
import Sidebar from '../components/Sidebar'
import { laptopData } from '../data/laptopData'
import { phonesData } from '../data/phoneData'
import { headphonesData } from '../data/headphoneData'
import Footer from '../components/Footer'

const Home = ({products, setProducts}) => {
  const totalProducts = [...laptopData,...phonesData,...headphonesData]

  let laptopBrands = []
  let phoneBrands = []
  let headphoneBrands = []
  laptopBrands = laptopData.map( (product) => (product.details.brand))
  laptopBrands = [...new Set(laptopBrands)]
  phoneBrands = phonesData.map( (product) => (product.details.brand))
  phoneBrands = [...new Set(phoneBrands)]
  headphoneBrands = headphonesData.map( (product) => (product.details.brand))
  headphoneBrands = [...new Set(headphoneBrands)]


  const [filters,setFilters] = useState( {
    categories : [],
    brands : [],
    price : {
      minPrice: 0,
      maxPrice : 200000
    }
  } )

  function checkboxChangeHandler(event){
    const {name,value,checked} = event.target;

    setFilters( prevFilters => {
      // Now event.target can either be checked or unchecked
      if(checked){
        // so add the event.target 
        return {
          ...prevFilters,
          // let suppose if any change happens in category checkboxes,then we have to maintain 
          // the prev state of categories array(by ...prevFilters[name] which is object[propery]) + value which is added.
          [name] : [...prevFilters[name],value]
        }
      }
      else{
        return{
          ...prevFilters,
          [name] : prevFilters[name].filter( item => item!==value )
        }
      }
    } )
  }

  function filterProducts(){

    let array = totalProducts.filter( (product) => {
      // removing all commas from the price of product
      const price = parseInt(product.price.replace(/,/g , ''))
      return (
        (filters.categories.length===0 ||  filters.categories.includes(product.type))&&
        (filters.brands.length===0 ||  filters.brands.includes(product.details.brand))&&
        (filters.price.minPrice <= price && filters.price.maxPrice >= price)
      );
     })
    setProducts(array);
  }

  // using useEffect so as after change has been done to filters, then only filterProducts() is called
  useEffect( () => {
    filterProducts()
  },[filters])

  // shuffle the products by Fisher Yates Sorting
  function shuffle(){
    for(let i=products.length-1;i>0;i--){
      let j = Math.floor(Math.random() * (i+1));
      [products[i],products[j]] = [products[j],products[i]];
    }
  }
  
  // Sorting states
  const [sortingproducts,setSortingProducts] = useState("none")

  function radioChangeHandler(event){
    const {value} = event.target;
    setSortingProducts(value)
  }

  function sortProducts(){
    let array = [...products]
    if(sortingproducts==='priceAsc'){
      array.sort( (a,b) => 
      parseInt(a.price.replace(/,/g, '')) - parseInt(b.price.replace(/,/g, '')))
      setProducts(array)
    }
    else if(sortingproducts==='priceDsc'){
      array.sort( (a,b) => 
        parseInt(b.price.replace(/,/g, '')) - parseInt(a.price.replace(/,/g, '')))
      setProducts(array)
    }
    else if(sortingproducts==='ratingAsc'){
      array.sort( (a,b) => a.rating - b.rating)
      setProducts(array)
    }
    else if(sortingproducts==='ratingDsc'){
      array.sort( (a,b) => b.rating - a.rating)
      setProducts(array)
    }
  }

  useEffect( () => {
    sortProducts()
  },[sortingproducts])

  return (
    <div>
      <div className='flex '>
        <Sidebar checkboxChangeHandler = {checkboxChangeHandler} filters={filters} laptopBrands={laptopBrands} phoneBrands={phoneBrands} 
        headphoneBrands={headphoneBrands} setFilters={setFilters} radioChangeHandler={radioChangeHandler} />
        <Featured products = {products} shuffle={shuffle} sortingproducts={sortingproducts} />
      </div>
      <div className='w-full'>
        <Footer/>
      </div>
    </div>
  )
}

export default Home