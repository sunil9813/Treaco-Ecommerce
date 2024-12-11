import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { CartItems } from "./CartItems";
import PropTypes from "prop-types";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import StripeCheckout from "react-stripe-checkout";
import { clearCart } from "../../store/cartSlice";

export const Cart = () => {
  const [cardOpen, setCardOpen] = useState(false);
  const dispatch = useDispatch();
  const closeCard = () => {
    setCardOpen(null);
  };

  const quantity = useSelector((state) => state.cart.totalQuantity);
  const cartItems = useSelector((state) => state.cart.itemsList);

  //total
  let total = 0;
  const itemsLists = useSelector((state) => state.cart.itemsList);
  itemsLists.forEach((item) => {
    total += item.totalPrice;
  });

  const handleToken = (token) => {
    console.log(token);
    dispatch(clearCart());
  };

  return (
    <>
      <div className="card" onClick={() => setCardOpen(!cardOpen)}>
        <IoBagHandleOutline className="cardIcon" />
        <span className="flexCenter">{quantity}</span>
      </div>
      <div className="card wishlist">
        <IoMdHeartEmpty className="cardIcon" />
        <span className="flexCenter">0</span>
      </div>
      <div className={cardOpen ? "overlay" : "nonoverlay"}></div>

      <div className={cardOpen ? "cartItem" : "cardhide"}>
        <div className="title flex">
          <h2>Shopping Cart</h2>
          <button onClick={closeCard}>
            <AiOutlineClose className="icon" />
          </button>
        </div>
        {cartItems.map((item) => (
          <CartItems key={item.id} id={item.id} cover={item.cover} name={item.name} price={item.price} quantity={item.quantity} totalPrice={item.totalPrice} />
        ))}

        <div className="checkOut">
          <StripeCheckout
            token={handleToken}
            stripeKey="pk_test_51Lojp7H4KPatTXixZvuBbyW0Ff28QXnV64xM0HFOw4uTFmfyDZlFkdVZXeo0TY5v0T5GBKw1VnjsmSFtGWQzmh3700vbDn2kSH"
            amount={total * 100} // this is beacuse in stripe amount will be in cents so multiple by 100
            name="E-commerce Store"
            email="gorkcoder@gmail.com"
            description="Payment test using stripe checkout"
          >
            <button>
              <span>Process To Checkout</span>
              <label htmlFor="">${total.toFixed(2)}</label>
            </button>
          </StripeCheckout>
        </div>
      </div>
    </>
  );
};
CartItems.propTypes = {
  id: PropTypes.number,
  cover: PropTypes.any,
  name: PropTypes.any,
  price: PropTypes.any,
  quantity: PropTypes.any,
  totalPrice: PropTypes.any,
};
