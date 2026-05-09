import React from "react";
import "./ProductItem.css";

class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }

  increase = () => {
    this.setState({ count: ++this.state.count });
  };

  decrease = () => {
    if (this.state.count > 1) {
      this.setState({ count: --this.state.count });
    }
  };

  render() {
    const { image, title, description, price, rating } = this.props;
    const totalPrice = this.state.count * price;
    return (
      <div className="product-card">
        <img className="product-image" src={image} alt={title} />
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{description}</p>
        <p className="product-price">${totalPrice}</p>
        <div className="counter-btn">
          <button onClick={this.decrease}>-</button>
          <p>{this.state.count}</p>
          <button onClick={this.increase}>+</button>
        </div>
        <div className="product-rating">
          <span>⭐ {rating.rate}</span>
          <span>({rating.count})</span>
        </div>
      </div>
    );
  }
}
export default ProductItem;
