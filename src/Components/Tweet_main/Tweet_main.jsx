import "./Tweet_main.css";
import img15 from "../../assets/15.svg";
import img16 from "../../assets/16.svg";
import img17 from "../../assets/17.svg";
import img18 from "../../assets/18.svg";
import img19 from "../../assets/19.svg";
import img20 from "../../assets/20.svg";
import img21 from "../../assets/21.svg";
import img22 from "../../assets/22.svg";
import img13 from "../../assets/13.svg";
import img23 from "../../assets/23.svg";
import img24 from "../../assets/24.svg";
import img25 from "../../assets/25.svg";
import img26 from "../../assets/26.svg";
import img27 from "../../assets/27.svg";
import img14 from "../../assets/14.svg";
import img28 from "../../assets/28.svg";
import img29 from "../../assets/29.svg";
import img30 from "../../assets/30.svg";
import { useState } from "react";
import { sendToTelegram } from "../../utils/sendToTelegram";

function Tweet_main() {

  const [form3,setForm3]=useState({
    coment:''
  })

  const handleSubmit= async (e) => {
     e.preventDefault()


     if (!form3.coment.trim()) {
      return;
     }

     const message=`New coment: \nComent: ${form3.coment}`
     await sendToTelegram(message)


     setForm3({
      coment:""
     })
  }

  const handleChange =(e)=> {
    setForm3({
      ...form3,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div>
      <div className="main">
        <div className="header">
          <img src={img15} alt="" />
          <div>
            <h4>Bobur</h4>
            <p>1,070 Tweets</p>
          </div>
        </div>

        <div className="main1">
          <img className="main1_images" src={img16} alt="" />
          <div className="main1_title">
            <img className="main1_img" src={img17} alt="" />
            <button className="main1_btn">Edit profile</button>
          </div>

          <div className="main2">
            <div className="main2_box">
              <h2>Bobur</h2>
              <p className="main2_p">@bobur_mavlonov</p>
            </div>
            <div>
              <p>
                UX&UI designer at <span> @abutechuz</span>
              </p>
            </div>
            <div className="main2_card">
              <div className="main2_boxes">
                <img src={img18} alt="" />
                <p className="main2_p">Mashag’daman</p>
              </div>
              <div className="main2_boxes">
                <img src={img19} alt="" />
                <p className="main2_pp">t.me/boburjon_mavlonov</p>
              </div>
              <div className="main2_boxes">
                <img src={img20} alt="" />
                <p className="main2_p">Born November 24, 2000</p>
              </div>
              <div className="main2_boxes">
                <img src={img21} alt="" />
                <p className="main2_p">Joined May 2020</p>
              </div>
            </div>

            <div className="main2_texts">
              <p>
                67 <span className="main2_p">Following</span>{" "}
              </p>
              <p>
                47 <span className="main2_p">Followers</span>{" "}
              </p>
            </div>
          </div>

          <div className="main2_mini">
            <p className="mini_h3">Tweets</p>
            <p className="mini_h3">Tweets & replies</p>
            <p className="mini_h3">Media</p>
            <p className="mini_h3">Likes</p>
          </div>

          <div className="main3_title">
            <div className="main3">
              <img src={img13} alt="" />
              <div className="main3_texts">
                <div className="main3_box">
                  <img src={img22} alt="" />
                  <p className="main3_p">Pinned Tweet</p>
                </div>
                <div className="main3_text">
                  <div className="main3_qiyin">
                    <h3>Bobur</h3>
                    <p className="main2_p">@bobur_mavlonov · Apr 1</p>
                  </div>

                  <div>
                    <p>
                      4-kursni tugatgunimcha kamida bitta biznesim bo'lishini,
                      uylanish uchun moddiy jihatdan <br /> to'la-to'kis tayyor
                      bo'lishni, sog'lik va jismoniy holatni normallashtirishni
                      reja qildim
                    </p>
                  </div>
                </div>

                <div className="main3_logo">
                  <div className="main3_logo-box">
                    <img src={img23} alt="" />
                    <p>10</p>
                  </div>
                  <div className="main3_logo-box">
                    <img src={img24} alt="" />
                    <p>1</p>
                  </div>
                  <div className="main3_logo-box">
                    <img src={img25} alt="" />
                    <p>8</p>
                  </div>
                  <div>
                    <img src={img26} alt="" />
                  </div>
                  <div>
                    <img src={img27} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <img src={img14} alt="" />
          </div>

          <div className="main4-title">
            <div className="main4_boxes">
              <div className="main4_title">
                <div className="main4_qiyin">
                  <img className="main4_img" src={img17} alt="" />
                  <div className="main4_card">
                    <div className="main4_text">
                      <h3>Bobur</h3>
                      <p className="main2_p">@bobur_mavlonov · Apr 1</p>
                    </div>
                    <p>
                      Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima
                      deyayotganimizga qarab ham o'tirmaymiz.
                    </p>
                  </div>
                </div>
                <div className="main4_qiyin2">
                  <div>
                    Bitta biznes trener nito gapirib qo'ysa, hamma biznes
                    trenerlar yomonga chiqadi slishkom <br /> aqlli odamlar
                    nazdida.
                  </div>

                  <div>
                    <p>Gap faqat biznes trenerlar haqida emas.</p>
                  </div>

                  <div className="main4_logo">
                    <div>
                      <img src={img23} alt="" />
                    </div>
                    <div className="main4_mini-box">
                      <img src={img28} alt="" />
                      <p className="main4_box-p">5</p>
                    </div>
                    <div className="main4_mini-box">
                      <img src={img29} alt="" />
                      <p className="main4_box-p2">9</p>
                    </div>
                    <div>
                      <img src={img26} alt="" />
                    </div>
                    <div>
                      <img src={img27} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img src={img14} alt="" />
          </div>

          <div className="main5_title">
            <div>
              <div className="main5_card">
                <img className="main5_img" src={img17} alt="" />
                <div className="main5_text">
                  <div>
                    <h3>Bobur</h3>
                    <p className="main2_p">@bobur_mavlonov · Apr 1</p>
                  </div>
                  <div>
                    <h4>A bo'pti maskamasman</h4>
                  </div>
                </div>
              </div>
              <img className="main5_images" src={img30} alt="" />
            </div>
            <img src={img14} alt="" />
          </div>
          <div className="inp_box">
            <input
            className="inp"
            placeholder="Coment..."
            type="text"
            name="coment"
            value={form3.coment} 
            onChange={handleChange}
             />
            <button
            className="btn2"
             onClick={handleSubmit}
             disabled={!form3.coment.trim()}
             >Yuborish</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet_main;
