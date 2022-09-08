import React from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

class App extends React.Component {
  constructor(params) {
    super();
    this.state = {
      products: [
        {
          id: 1,
          price: 99,
          title: "Headphone",
          qty: 1,
          img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
        },
        {
          id: 2,
          price: 9999,
          title: "Mobile Phone",
          qty: 10,
          img: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
        },
        {
          id: 3,
          price: 101010,
          title: "Apple Laptop",
          qty: 5,
          img: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
        },
      ],
    };
  }

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const idx = products.indexOf(product);
    products[idx].qty += 1;

    this.setState({
      products,
    });
  };

  handleDecreaseQuantity = (product) => {
    if (product.qty === 1) {
      this.handleDeleteItem(product);
      return;
    }
    const { products } = this.state;
    const idx = products.indexOf(product);
    products[idx].qty -= 1;

    this.setState({
      products,
    });
  };

  handleDeleteItem = (product) => {
    const { products } = this.state;
    const idx = products.indexOf(product);
    products.splice(idx, 1);
    this.setState({
      products,
    });
  };

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach(prod => {
      count += prod.qty;
    });
    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;
    let total = 0;
    products.forEach(prod => {
      total += prod.qty * prod.price;
    });
    return total;
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteItem={this.handleDeleteItem}
        />
        <div style={{fontSize:20, padding:10}}>Total: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
