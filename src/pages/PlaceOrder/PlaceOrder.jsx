import { useContext } from "react";
import "./PlaceOrder.css"
import { StoreContext } from "../../context/StoreContext";

function PlaceOrder() {
  const { getTotalCartAmount } = useContext(StoreContext)
  return (
    <form className="place-order">
      <div className="place-order-left">
        <div className="title">Delivery Information</div>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="text" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone number"/>
      </div>
      <div className="place-order-right">
        <div className="cart-total">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Ghc {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Charges</p>
              <p>Ghc {getTotalCartAmount() === 0 ? 0 : 10}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>Ghc {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 10}</p>
            </div>
          </div>
          <button>Proceed To Payment</button>
        </div>
        </div>
      </div>
    </form>
  )
}
export default PlaceOrder;