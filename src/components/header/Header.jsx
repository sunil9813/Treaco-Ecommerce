import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import { Cart } from "./Cart";

export const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  return (
    <>
      <header className="header">
        <div className="container flex">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="search flex">
            <AiOutlineSearch className="searchIcon" />
            <input type="text" placeholder="Search Anything..." />
          </div>
          <div className="account flexCenter">
            <button className="profile">Sign In</button>
            <Cart />
          </div>
        </div>
      </header>
    </>
  );
};
