import React, { useEffect, useState } from 'react'
import Product from './Product'


function ListProduct() {
  const[productList , setProductList] = useState([]) 
  const[searchTerm, setSearchTerm] = useState("")

  const getProduct = () => {
    if (productList.length > 0) {
      const productsTemp = productList.filter( p => {
        return p.title.startsWith(searchTerm)
      })
      
      return productsTemp.map((p, key )=> {
        return <Product key={key} p={p} />;
    })
  }
}
const handSearch = (e) =>{
  e.preventDefault()
   const searchValue = document.querySelector('#search').value
  // setSearchTerm(e.target.value)
   setSearchTerm(searchValue)
  

}
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(response=> setProductList(response))
  
  },[])
  return (
    <div className='container-fluix mx-auto w-75 mt-4'>
      <h2 >Liste des Produits  </h2><br></br>
      <form>
   <div className="row g-3 align-items-center">
    <div className="col-auto">
    <input type="text" className="form-control"  id="search" placeholder="Search"/></div>
   <div className="col-auto">
    <input className="btn btn-warning" type="submit" value ="Search" onClick={handSearch}/></div>

   </div>
   </form><br></br>
    
      <table className="table table-light ">
      <thead>
      <tr>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Description</th>
      <th scope="col">Category</th>
      <th scope="col">Image</th>
      {/* <th scope="col">Rating</th> */}
     </tr>
    </thead>
    <tbody>
    {getProduct()}
    </tbody>
    </table>
    
    </div>
  )
}


export default ListProduct
