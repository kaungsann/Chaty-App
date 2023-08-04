import React from "react";
import logo from "../../assets/logo.png";
import footer from "./footer.module.css";
export default function Footer() {
  return (
    <>
      <div className={footer.Container}>
        <div className={footer.logoBox}>
          <img src={logo} className={footer.img} />
          <div className={footer.logoTitle}>
            <span className={footer.chaty}>Chaty</span>
            <span className={footer.free}>free chat room</span>
          </div>
        </div>
        <div className={footer.footerLabel}>
          <div className={footer.labelBox}>
            <span className={footer.text}>CHAT ROOMS</span>
            <span className={footer.text}>ADVERTISE WITH US</span>
            <span className={footer.text}>FAQ</span>
          </div>
          <div className={footer.labelBox}>
            <span className={footer.text}>CONTACT</span>
            <span className={footer.text}>SAFETY</span>
            <span className={footer.text}>PRIVACY POLICY</span>
          </div>

          <div className={footer.labelBox}>
            <span className={footer.text}>COOKIE POLICY</span>
            <span className={footer.text}>T.O.S</span>
            <span className={footer.text}>COOKIE SETTING</span>
          </div>
        </div>
      </div>
      <div className={footer.copyRight}>
        <span className={footer.copy}>© 2023 Chaty , All Rights Reserved.</span>
      </div>
    </>
  );
}
