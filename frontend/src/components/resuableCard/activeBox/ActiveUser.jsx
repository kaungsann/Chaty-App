import React from "react";
import img from "../../../assets/images.jpeg";
import { BsDot } from "react-icons/bs";
import active from "./active.module.css";
export default function ActiveUser() {
  return (
    <>
      <div className={active.activeBox}>
        <div className={active.Box}>
          <img src={img} className={active.img} />
          <BsDot className={active.dot} />
        </div>
        <span className={active.name}>Halen</span>
      </div>
      <div className={active.activeBox}>
        <div className={active.Box}>
          <img src={img} className={active.img} />
          <BsDot className={active.dot} />
        </div>
        <span className={active.name}>Halen</span>
      </div>
      <div className={active.activeBox}>
        <div className={active.Box}>
          <img src={img} className={active.img} />
          <BsDot className={active.dot} />
        </div>
        <span className={active.name}>Halen</span>
      </div>
      <div className={active.activeBox}>
        <div className={active.Box}>
          <img src={img} className={active.img} />
          <BsDot className={active.dot} />
        </div>
        <span className={active.name}>Halen</span>
      </div>
    </>
  );
}
