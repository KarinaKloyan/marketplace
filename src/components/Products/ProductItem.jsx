import './Products.css'

function ProductItem({ title, description, price, image, rating }) {
  return (
    <div className="product-card">
      <img className="product-image" src={image} alt={title} />
      <h2 className="product-title">{title}</h2>
      <p className="product-description">{description}</p>
      <p className="product-price">${price}</p>
      <div className="product-rating">
        <span>⭐ {rating.rate}</span>
        <span>({rating.count})</span>
      </div>
    </div>
  );
}

export default ProductItem;
