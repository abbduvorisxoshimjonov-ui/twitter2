import "./Twitter.css";
import img1 from "../../assets/1.svg";
import img2 from "../../assets/2.svg";
import img3 from "../../assets/3.svg";
import img4 from "../../assets/4.svg";

function Twitter({ setShowMadal, setShowMadal2 }) {
  return (
    <div>
      <div className="twit_box">
        <div>
          <img className="image" src={img1} alt="" />
        </div>
        <div className="twit_mini-box">
          <div className="twit_text">
            <img src={img2} alt="" />
            <h1 className="twit_h1">Happening now</h1>
            <h2 className="twit_h3">Join Twitter today</h2>
          </div>
          <div className="twit_btn">
            <button className="btn1">
              <img className="btn_img" src={img3} alt="" />
              <p>Sign up with Google</p>
            </button>
            <button className="btn1">
              <img className="btn_img" src={img4} alt="" />
              <p>Sign up with Apple</p>
            </button>
            <button className="btn1">
              <p onClick={() => setShowMadal(true)}>
                Sign up with phone or email
              </p>
            </button>
          </div>
          <div className="twit_texts">
            <p>
              By singing up you agree to the <span>Terms of Service</span> and{" "}
              <span>
                {" "}
                Privacy <br /> Policy,
              </span>
              including <span>Cookie Use.</span>
            </p>
            <p onClick={() => setShowMadal2(true)}>
              Already have an account?<button className="twit_btn2">Log in</button>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Twitter;
