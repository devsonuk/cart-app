import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
  constructor(params) {
    super();
    this.state = {
      products: [
        {
          id: 1,
          price: 99,
          title: "Smart Watch",
          qty: 1,
          img: "",
        },
        {
          id:2,
          price: 9999,
          title: "Mobile Phone",
          qty: 10,
          img: "",
        },
        {
          id:3,
          price: 101010,
          title: "Apple Laptop",
          qty: 5,
          img: "",
        },
      ],
    };
  }

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const idx = products.indexOf(product);
    products[idx].qty += 1;

    this.setState({
        products
    });
  }

  handleDecreaseQuantity = (product) => {
    if (product.qty === 1) {
        this.handleDeleteItem(product);
        return;
    }
    const { products } = this.state;
    const idx = products.indexOf(product);
    products[idx].qty -= 1;

    this.setState({
        products
    });
  }

  handleDeleteItem = (product) => {
    const { products } = this.state;
    const idx = products.indexOf(product);
    products.splice(idx, 1);
    this.setState({
        products
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem
                product={product} 
                key={product.id} 
                onIncreaseQuantity={this.handleIncreaseQuantity}
                onDecreaseQuantity={this.handleDecreaseQuantity}
                onDeleteItem={this.handleDeleteItem}
            />
          );
        })}
      </div>
    );
  }
}

export default Cart;
