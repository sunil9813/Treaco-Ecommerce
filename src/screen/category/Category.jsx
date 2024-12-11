import Slider from "react-slick";
import { SampleNextArrows, SamplePrevArrows } from "../hero/Hero";
import { categories } from "../../assets/data/data";

export const Category = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
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
      <section className="catgeory">
        <div className="container">
          <h1>Browse Categories</h1>

          <div className="content">
            <Slider {...settings}>
              {categories.map((product) => (
                <div className="item" key={product}>
                  <div className="img">
                    <img src={product.image} alt="banner" />
                  </div>
                  <div className="text">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};
