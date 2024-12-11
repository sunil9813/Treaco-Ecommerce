import Img from "../assets/images/support.webp";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

export const Support = () => {
  return (
    <>
      <div className="support">
        <div className="container">
          <div className="text">
            <h1>Talk To A Real Person</h1>
            <p>Are you on the fence? Have a question? Need a recommendation? Member Services is always here to help. Send us a message.</p>
          </div>
          <div className="img">
            <img src={Img} alt="Img" />
          </div>
          <div className="btn">
            <button>
              Chat With Member Services <IoChatbubbleEllipsesOutline size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
