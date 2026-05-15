import "./Madal2.css";
import img2 from "../../assets/2.svg";
import { useState } from "react";


const Login = () => {
  const [form2, setForm2] = useState({
    adres: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form2);
  };

  const handleChange = (e) => {
    setForm2({
      ...form2,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="modal">
      <div className="madal2">
        <div className="madal2_box">
          <img className="madal2_img" src={img2} alt="" />
          <h1>Log in to Twitter</h1>
        </div>
        <form className="form2" onSubmit={handleSubmit}>
          <input
            className="madal2_inp"
            type="text"
            name="adres"
            value={form2.adres}
            placeholder="Phone number, email address"
            onChange={handleChange}
          />
          <input
            className="madal2_inp"
            type="text"
            name="password"
            value={form2.password}
            placeholder="Password"
            onChange={handleChange}
          />

          <button className="button2" type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
