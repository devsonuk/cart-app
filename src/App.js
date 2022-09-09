import React from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

class App extends React.Component {
  constructor(params) {
    super();
    this.state = {
      products: [],
      isLoading:true
    };
  }

  componentDidMount() {
    const db = getFirestore();
    // getDocs(collection(db, "products")).then((querySnapshot) => {
    //   const products = querySnapshot.docs.map((doc) => {
    //     var data = doc.data();
    //     data.id = doc.id;
    //     return data;
    //   });
    //   this.setState({
    //     products,
    //     isLoading:false
    //   })
    // });
    onSnapshot(collection(db, "products"), (querySnapshot) => {
      const products = querySnapshot.docs.map((doc) => {
        var data = doc.data();
        data.id = doc.id;
        return data;
      });
      this.setState({
        products,
        isLoading:false
      })
    });
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
    products.forEach((prod) => {
      count += prod.qty;
    });
    return count;
  };

  getCartTotal = () => {
    const { products } = this.state;
    let total = 0;
    products.forEach((prod) => {
      total += prod.qty * prod.price;
    });
    return total;
  };

  render() {
    const { products, isLoading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        {isLoading && <h1>Loading...</h1>}
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteItem={this.handleDeleteItem}
        />
        <div style={{ fontSize: 20, padding: 10 }}>
          Total: {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
