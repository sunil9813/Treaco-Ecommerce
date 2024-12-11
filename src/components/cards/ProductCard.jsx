import PropTypes from "prop-types";

export const ProductCard = ({ products, handlePopup }) => {
  return (
    <>
      <div className="item" onClick={() => handlePopup(products)}>
        <div className="img">
          <img src={products.cover} alt="" />
        </div>
        <div className="text">
          <h3>{products.name}</h3>
          <p>{products.desc.slice(0, 80)}...</p>
          <h3 className="price-tag">${products.price}</h3>
        </div>
      </div>
    </>
  );
};
ProductCard.propTypes = {
  products: PropTypes.any,
  handlePopup: PropTypes.any,
};
