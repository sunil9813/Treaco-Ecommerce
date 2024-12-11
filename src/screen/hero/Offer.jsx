import PropTypes from "prop-types";
import { flaseproduct, offerImgproduct } from "../../assets/data/data";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { SampleNextArrows, SamplePrevArrows } from "./Hero";

export function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button className="offer-arrow next-arrow" onClick={onClick}>
      <IoIosArrowForward size={18} />
    </button>
  );
}

export function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="offer-arrow prev-arrow" onClick={onClick}>
      <IoIosArrowBack size={18} />
    </button>
  );
}

export const Offer = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    nextArrow: <SampleNextArrows />,
    prevArrow: <SamplePrevArrows />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="offer">
        <div className="container">
          <FlaseSales />
          <div className="wrapper">
            <Slider {...settings}>
              {offerImgproduct.map((product) => (
                <div className="imageWrapper" key={product}>
                  <img src={product.cover} alt="banner" />
                  <div className="animatedBg"></div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};
export const FlaseSales = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="flaseSale">
      <div className="content">
        <div className="imageWrapper">
          <img src="../images/offer/banner-2.webp" alt="banner" />
          <div className="animatedBg"></div>
        </div>
        <div className="products">
          <h1>Flash Sale</h1>
          <Slider {...settings}>
            {flaseproduct.map((product) => {
              const available = product.qty - product.sold;
              const soldPercentage = (product.sold / product.qty) * 100;
              return (
                <>
                  <div className="product" key={product.id}>
                    <div className="img">
                      <img src={product.cover} alt="cover" />
                    </div>
                    <div className="details">
                      <h3>{product.name}</h3>
                      <p>{product.desc.slice(0, 35)}...</p>
                      <div className="price">
                        <h3 className="price-tag">${product.dprice}.00</h3>
                        <h3 className="underline">${product.price}.00</h3>
                      </div>
                    </div>
                  </div>
                  <div className="progress">
                    <div className="flex">
                      <p>Sold : {product.sold}</p>
                      <p>Available : {available}</p>
                    </div>
                    <div className="progressBar">
                      <div className="progressFill" style={{ width: `${soldPercentage}%` }}></div>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

Offer.propTypes = {
  children: PropTypes.any,
};
SampleNextArrow.propTypes = {
  onClick: PropTypes.any,
};
SamplePrevArrow.propTypes = {
  onClick: PropTypes.any,
};
