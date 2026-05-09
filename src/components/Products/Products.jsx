import "./Products.css";
import { products } from "../db/db";
import ProductItem from "./ProductItem";

function Products() {

  console.log(products)

  return (
    <div className="container products-list">
      {products.map((product) => (
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
