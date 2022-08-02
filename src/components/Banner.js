import React, { useState } from "react";
import "./Banner.css";
import emailjs from "emailjs-com";
import WhatsApp from "../Image/WhatsApp.png";

const Banner = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    // var phone = document.getElementById("mobile");
    // var mailFormat = /(^[1-9]\d{9})/;

    // if (!mailFormat.test(phone.value)) {
    //   alert(
    //     " Phone number is not valid, Please provide a valid 10 digit phone number "
    //   );
    //   return false;
    // }

    emailjs
      .sendForm(
        "service_9epabyp",
        "template_jhu2kas",
        e.target,
        "e3vsivsGc6DluekT8"
      )
      .then((res) => {
        alert("Success");
        // console.log(alert)
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  
  }

  return (
    <div
      id="landing-hero"
      className="hero is-relative is-theme-secondary hero-waves"
    >
      <div className="navbar-placeholder" style={{ height: "64px" }}>
        <nav
          className="navbar navbar-wrapper navbar-fade navbar-light is-transparent"
          id="logo-scroll"
        >
          <div className="container">
         
            <div className="navbar-brand" style={{ marginTop: "10px" }}></div>
          </div>
        </nav>
      </div>
 
      <div id="main-hero" className="hero-body ">
        <div className="container">
          <div className="columns is-vcentered is-tablet-portrait">
    
            <div className="column is-5 header-caption has-text-left">
              <h1 className="landing-title">
                A Smart Way to Sell / Buyback with us !
              </h1>
              <h2 className="subtitle is-5 light-text parag">
                Sell your item for best price & get instant cash
              </h2>
            </div>
 
            <div
              className="column is-9  abcd"
            >
              <div
                id="login-card"
                className="animated preFadeInLeft fadeInLeft"
              >
                <div className="flex-card wavy-login-card">
                  <center>
                    <h2
                      className="text-bold dark-text no-margin-bottom pt-20 pb-20"
                      style={{ paddingTop: "15px" }}
                    >
                      Contact Form
                    </h2>
                  </center>
                  <form
                    method="post"
                    className="pt-10 pb-10"
                    name="myForm"
                    action
                    onSubmit={sendEmail}
                  >
                    <div className="control-material is-primary">
                      <input
                        className="material-input"
                        type="text"
                        name="name"
                        value={name}
                        onChange={ e => setName(e.target.value)}  
                        required                 
                      />
                      <span className="material-highlight" />
                      <span className="bar" />
                      <label style={{ top: "-10px", left: "-2px", fontSize: "12px" }}>Your Name (required)</label>
                    </div>
                    <div className="control-material is-primary">
                      <input
                        className="material-input"
                        type="number"
                        id="mobile"
                        value={phone}
                        onChange={ e => setPhone(e.target.value)}
                        // onSubmit={sendEmail}
                        name="phone"
                        maxLength="10"
                        minlength="10"
                        required
                        onInput={(e) => {e.target.value = Math.max( 0,    parseInt(e.target.value)).toString().slice(0, 10);}}
                      />
                      <span className="material-highlight" />
                      <span className="bar" />
                      <label style={{ top: "-10px", left: "-2px", fontSize: "12px" }}>Your Phone (required)</label>
                    </div>
             
                    <div className="control-material is-primary">
                      <input
                        id="email"
                        className="material-input "
                        type="email"
                        name="email"
                        pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                        value={email}
                        onChange={ e => setEmail(e.target.value)}
                        required
                      />
                      <span className="material-highlight" />
                      <span className="bar" />
                      <label style={{ top: "-10px", left: "-2px", fontSize: "12px" }}>
                        Your Email (required)
                      </label>
                    </div>
                    {/* <div className="control-material is-primary">
   <input className="material-input" type="text" name="your-subject" />
   <span className="material-highlight" />
   <span className="bar" />
   <label>Subject</label>
   </div> */}
                    <div className="control-material is-primary">
                      <input
                        className="material-input"
                        type="text"
                        name="message"
                        value={message}
                        onChange={ e => setMessage(e.target.value)}
                        required
                      />
                      <span className="material-highlight" />
                      <span className="bar" />
                      <label style={{ top: "-10px", left: "-2px", fontSize: "12px" }}>Your Message</label>
                    </div>
                    <div className="pt-20 pb-20">
                      {/* <a href="tel:+91 7977747037" className="button button-cta btn-align success-btn rounded raised no-lh"><span>Call us</span></a> */}
                      <button
                        className="button button-cta btn-align primary-btn rounded raised no-lh"
                        name="submit"
                        type="submit"
                        style={{ width: "55%", textAlign: "center" }}
                      >
                        Submit
                      </button>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        {/* <p>Email Newsletter: Subscribe to our free email newsletter and never miss a post! (No spam, we promise)</p> */}
                        <div
                          className="form-check"
                          style={{ paddingLeft: "0px" }}
                        >
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue
                            id="flexCheckChecked"
                            defaultChecked
                            style={{ width: "18px" }}
                            required
                          />
                          <label
                            className="form-check-label check_box_label"
                            htmlFor="flexCheckChecked"
                            style={{
                              fontSize: "14px",
                              fontWeight: 300,
                              fontStretch: "normal",
                              fontStyle: "normal",
                              letterSpacing: "normal",
                              textAlign: "left",
                              color: "#1C2637",
                              marginLeft: "10px",
                              position: "relative",
                              top: "-2px",
                            }}
                          >
                            I want to subscribe to the newsletter
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Hero caption */}
      <a
        className="webwhat"
        href="https://api.whatsapp.com/send?phone=+971563641641"
      >
        <img
          title="Whatsapp for Startups"
          src={WhatsApp}
          alt="Whats app"
          style={{
            height: "7%",
            position: "fixed",
            bottom: "15px",
            left: "10px",
            zIndex: 9999999,
            width: "auto",
          }}
        />{" "}
      </a>
    </div>
  );
};

export default Banner;
