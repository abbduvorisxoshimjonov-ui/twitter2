import "./Twitter.css";
import img1 from "../../assets/1.svg";
import img2 from "../../assets/2.svg";
import img3 from "../../assets/3.svg";
import img4 from "../../assets/4.svg";
import { Link } from "react-router-dom";


const Twitter = () => {
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
          <div className="twit_link">
            <Link className="btn1" to="/register">
            <img src={img3} alt="" />
            Sign up with Google
            </Link>
            <Link className="btn1" to="/register">
            <img src={img4} alt="" />
            Sign up with Apple
            </Link>
            <Link className="btn1" to="/register">
            Sign up with phone or email</Link>
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
            <Link to="/login">
              Already have an account?
              <button className="twit_btn2">Log in</button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Twitter;
