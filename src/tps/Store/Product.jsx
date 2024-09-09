

export default  function Product({p}) {
  return (
    
    <tr>
      <td>{p.id}</td>
      <td>{p.title}</td>
      <td>{p.price}</td>
      <td>{p.description}</td>
      <td>{p.category}</td>
      <td><img  width ={180}  src={p.image} alt="#"/></td>
    
    </tr>
      
    
  )
}


