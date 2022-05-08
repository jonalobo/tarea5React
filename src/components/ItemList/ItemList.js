import Item from '../Item/Item'
import './ItemList.css'
const ItemList = () => {
  return (
    <div className='contenedorCard'>
        <Item pictureUrl="https://api.lorem.space/image/book?w=400&h=225"
        id="1" price="1000" title="Libros"
        />
        <Item pictureUrl="https://api.lorem.space/image/shoes?w=400&h=225"
        id="2" price="1000" title="Libros"
        />
        <Item pictureUrl="https://api.lorem.space/image/drink?w=400&h=225"
        id="3" price="3500" title="Bebidas"
        />
        {/* <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item /> */}
    </div>
  )
}
export default ItemList