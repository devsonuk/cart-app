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

  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem 
                {...product} 
                key={product.id} 
            />
          );
        })}
      </div>
    );
  }
}

export default Cart;
