import React from 'react';

class CartItem extends React.Component {
    increaseQuantity = () => {
        // Form1
        // this.setState({
        //     qty: this.state.qty + 1
        // });
        
        // Form2
        // this.setState((prevState) => {
        //     return {
        //         qty: prevState.qty + 1 
        //     }
        // }, () => {
        //     console.log("Callback");
        // });

        //Handling via event


    }

    decreaseQuantity = () => {
        const {qty} = this.state;
        if (qty <= 0) {
            return;
        }

        this.setState((prevState) => {
            return {
                qty: prevState.qty - 1
            }
        })
    }

    deleteItem = () => {
        this.setState({
            qty: 0
        });
    }

    render() {
        const {price, title, qty, img} = this.props.product;
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img  alt='' src={img} style={styles.image} />
                </div>
                <div className='right-block'>
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs. {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className='cart-item-actions'>
                        {/* Buttons */}
                        <img 
                            alt='increase' 
                            className='action-icons' 
                            src='https://cdn-icons-png.flaticon.com/128/1828/1828925.png'
                            onClick={() => this.props.onIncreaseQuantity(this.props.product)}
                        />
                        <img 
                            alt='decrease' 
                            className='action-icons' 
                            src='https://cdn-icons-png.flaticon.com/128/992/992683.png'
                            onClick={() => this.props.onDecreaseQuantity(this.props.product)}
                        />
                        <img 
                            alt='delete' 
                            className='action-icons' 
                            src='https://cdn-icons-png.flaticon.com/128/484/484662.png'
                            onClick={() => this.props.onDeleteItem(this.props.product)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;