import "./Products.css";
import ProductItem from "../ProductItem/ProductItem";

function Products(props) {

  return (
    <div className="container products-list">
      {props.products.map((product) => (
        <ProductItem
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
          rating={product.rating}
        />
      ))}
    </div>
  );
}

export default Products;
