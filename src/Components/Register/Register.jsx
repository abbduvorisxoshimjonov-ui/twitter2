import { useState } from "react";
import "./Madal.css";
import img2 from "../../assets/2.svg";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    number: "",
    email: "",
    date: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="modal">
      <div className="modal_box">
        <img className="madal_img" src={img2} alt="" />
        <h2>Create an account</h2>
        <form className="form1" onSubmit={handleSubmit}>
          <input
            className="input1"
            placeholder="Name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            className="input1"
            type="text"
            placeholder="Phone number"
            name="number"
            value={form.number}
            onChange={handleChange}
          />

          <input
            className="input1"
            type="text"
            name="email"
            value={form.email}
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            className="input1"
            type="text"
            name="date"
            value={form.date}
            placeholder="Date of birth"
            onChange={handleChange}
          />

          <button type="submit" className="button1">
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
