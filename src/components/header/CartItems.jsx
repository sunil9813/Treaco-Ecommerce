import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import PropTypes from "prop-types";

export const CartItems = ({ id, cover, name, price, quantity, totalPrice }) => {
  const dispatch = useDispatch();

  const incCartitems = () => {
    dispatch(cartActions.addToCart({ id, name, price }));
  };
  const descCartitems = () => {
    dispatch(cartActions.removeFromCart(id));
  };
  return (
    <>
      <div className="cardList" key={id}>
        <div className="cartContent">
          <div className="img">
            <img src={cover} alt="" />
            <button className="remove flexCenter">
              <AiOutlineClose />
            </button>
          </div>
          <div className="details">
            <h3>{name}</h3>
            <p>Unit Price ${price}</p>

            <div className="price">
              <div className="qty flexCenter">
                <button className="plus" onClick={incCartitems}>
                  <AiOutlinePlus />
                </button>
                <button className="num">{quantity}</button>
                <button className="minus" onClick={descCartitems}>
                  <AiOutlineMinus />
                </button>
              </div>
              <div className="priceTitle">${totalPrice.toFixed(2)}</div>
            </div>
          </div>
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
