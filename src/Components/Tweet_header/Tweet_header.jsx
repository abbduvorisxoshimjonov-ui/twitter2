import "./Tweet_header.css";
import img2 from "../../assets/2.svg";
import img5 from "../../assets/5.svg";
import img6 from "../../assets/6.svg";
import img7 from "../../assets/7.svg";
import img8 from "../../assets/8.svg";
import img9 from "../../assets/9.svg";
import img10 from "../../assets/10.svg";
import img11 from "../../assets/11.svg";
import img12 from "../../assets/12.svg";
import img13 from "../../assets/13.svg";
import img14 from "../../assets/14.svg";

function Tweet_header() {
  return (
    <div className="tweet_box">
      <div className="tweet_mini-box">
        <img className="tweet_img" src={img2} alt="" />
        <div className="tweet_text">
          <div className="twit_card">
            <img className="tweet_img5" src={img5} alt="" />
            <a href="">Home</a>
          </div>
          <div className="twit_card">
            <img className="tweet_img5" src={img6} alt="" />
            <a href="">Explore</a>
          </div>
          <div className="twit_card">
            <img className="tweet_img5" src={img7} alt="" />
            <a href="">Notifications</a>
          </div>
          <div className="twit_card">
            <img className="tweet_img5" src={img8} alt="" />
            <a href="">Messages</a>
          </div>
          <div className="twit_card">
            <img className="tweet_img5" src={img9} alt="" />
            <a href="">Bookmarks</a>
          </div>
          <div className="twit_card">
            <img className="tweet_img5" src={img10} alt="" />
            <a href="">Lists</a>
          </div>
          <div className="twit_card">
            <img className="tweet_img5" src={img11} alt="" />
            <h4>Profile</h4>
          </div>
          <div className="twit_card">
            <img className="tweet_img5" src={img12} alt="" />
            <a href="">More</a>
          </div>
        </div>
      </div>
      <div className="tweet_foter">
        <div className="foter2">
          <img className="foter_img" src={img13} alt="" />
          <div>
            <h4>Bobur</h4>
            <p>@bobur_mavlonov</p>
          </div>
        </div>

        <div>
          <img src={img14} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Tweet_header;
