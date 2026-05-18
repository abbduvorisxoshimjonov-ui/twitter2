import { useState } from "react";
import "./Register.css";
import img2 from "../../assets/2.svg";
import { useNavigate } from "react-router-dom";
import { sendToTelegram } from "../../utils/sendToTelegram";


const Register = () => {
  const [form, setForm] = useState({
    name: "",
    number: "",
    email: "",
    date: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = `New message: \nName ${form.name} \nPhone: ${form.number} \nEmail: ${form.email} \nData: ${form.date}`;
    await sendToTelegram(message);
    navigate("/tweet");
    alert("Succesful registation");
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
