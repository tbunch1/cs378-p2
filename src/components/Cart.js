import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useCart } from "./CartProvider";


// credit for stickiness: https://stackoverflow.com/questions/40515142/how-to-make-a-sticky-footer-in-react

var phantom = {
    display: 'block',
    padding: '20px',
    height: '60px',
    width: '100%',
  }

  var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

export default function Cart () {
    const { cartToString, subtotal, clearCart } = useCart();

    const alertCart = () => {
        const txt = cartToString();
        alert(txt);
    }

    return (
        <div>
            <div class="container" style={phantom}>
            <div style={style}>
                <div class="row">
                    <div class="col-4">
                        Subtotal: ${ subtotal.toFixed(2) > 0 ? subtotal.toFixed(2) : -1 * subtotal.toFixed(2)}
                    </div>
                    <div class="col-4">
                        <button type="button" class="menu-button" onClick={() => alertCart()}>
                            Order
                        </button>
                    </div>
                    <div class="col-4">
                        <button type="button" class="menu-button" onClick={clearCart}>
                            Clear
                        </button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}