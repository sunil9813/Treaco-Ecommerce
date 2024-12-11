import { slide } from "../../assets/data/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import PropTypes from "prop-types";

export function SampleNextArrows(props) {
  const { onClick } = props;
  return (
    <button className="button-arrow next-arrow" onClick={onClick}>
      <IoIosArrowForward size={25} />
    </button>
  );
}

export function SamplePrevArrows(props) {
  const { onClick } = props;
  return (
    <button className="button-arrow prev-arrow" onClick={onClick}>
      <IoIosArrowBack size={25} />
    </button>
  );
}

export const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    nextArrow: <SampleNextArrows />,
    prevArrow: <SamplePrevArrows />,
  };
  return (
    <>
      <section className="hero">
        <Slider {...settings}>
          {slide.map((item, i) => (
            <div className="box" key={i}>
              <div className="img">
                <img src={item.image} alt="" />
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};
SampleNextArrows.propTypes = {
  onClick: PropTypes.any,
};
SamplePrevArrows.propTypes = {
  onClick: PropTypes.any,
};
