import "./Tweet_foter.css";
import img32 from "../../assets/32.svg";
import img33 from "../../assets/33.svg";
import img34 from "../../assets/34.svg";
import img35 from "../../assets/35.svg";
import img14 from "../../assets/14.svg";
const Tweet_foter = () => {
  return (
    <div className="footer">
      <div className="foter_box">
        <input className="foter_inp" placeholder="Search Twitter" type="text" />
        <img className="foter_img2" src={img32} alt="" />
      </div>

      <div className="foter_main">
        <h3 className="foter_h3">You might like</h3>

        <div className="foter_boxes">
          <div className="foter_mini-box">
            <img className="foter_mini-img" src={img33} alt="" />
            <div>
              <h4>Mushtariy</h4>
              <p className="main2_p">@Mushtar565266</p>
            </div>
          </div>

          <button className="foter_btn3">Follow</button>
        </div>
        <div className="foter_boxes2">
          <div className="foter_mini-box2">
            <img className="foter_mini-img" src={img34} alt="" />
            <div>
              <h4>Shuhratbek</h4>
              <p className="main2_p">@mrshukhrat</p>
            </div>
          </div>

          <button className="foter_btn3">Follow</button>
        </div>
        <p className="foter_p">Show more</p>
      </div>

      <div className="footer_maain">
        <div className="foter_foter">
          <h3>Trends for you</h3>
          <img src={img35} alt="" />
        </div>
        <div className="footer_maain">
          <div className="foter_section2">
            <div className="foter_mini-foter">
              <p>Trending in Germany</p>
              <img src={img14} alt="" />
            </div>
            <h4>Revolution</h4>
            <p>50.4K Tweets</p>
          </div>
          <div className="foter_section2">
            <div className="foter_mini-foter">
              <p>Trending in Germany</p>
              <img src={img14} alt="" />
            </div>
            <h4>Revolution</h4>
            <p>50.4K Tweets</p>
          </div>
          <div className="foter_section2">
            <div className="foter_mini-foter">
              <p>Trending in Germany</p>
              <img src={img14} alt="" />
            </div>
            <h4>Revolution</h4>
            <p>50.4K Tweets</p>
          </div>
          <p className="foter_p2">Show more</p>
        </div>
      </div>
    </div>
  );
};

export default Tweet_foter;
