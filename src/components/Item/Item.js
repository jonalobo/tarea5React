import './Item.css'
const Item = (props) => {

  const { pictureUrl, id, title, price } = props

  return (
    <div className="card w-96 bg-base-100 shadow-xl mt-10">
      <figure className="px-10 pt-10">
        <img src={pictureUrl} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{id}</p>
        <div className="card-actions">
          <button className="btn btn-primary">{price}</button>
        </div>
      </div>
  </div>
  )
}
export default Item