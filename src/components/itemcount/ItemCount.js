import { useState, useEffect } from "react"

const ItemCount = ({initial, stock}) => {

  const [inventario, setInventario] = useState(initial)
  
  useEffect(() => {
    console.log('hola')
  }, [stock])
  

  function onAdd() {
    if (inventario < stock) {
      setInventario(inventario + 1)
    }else {
      console.log('No hay más en stock')
    }
  }


  return (
    <div>
        <div tabIndex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <input type="text" placeholder={inventario} className="input input-bordered w-full max-w-xs"></input>
          
          <div className="card-actions">
            <button onClick={onAdd} className="btn btn-primary">+</button>
            <button className="btn btn-primary" onClick={()=>{setInventario(inventario - 1)}}>-</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ItemCount