import React from "react";
import img from "../../../assets/images.jpeg";
import card from "./card.module.css";
export default function ChatCard() {
  return (
    <>
      <div className={card.cardBox}>
        <div className={card.imgAndName}>
          <img src={img} className={card.img} />
          <div className={card.text}>
            <span className={card.name}># So Hun Jee</span>
            <div className={card.send}>
              <span className={card.user}>Tom :</span>
              <span className={card.sendText}>Hello !</span>
            </div>
          </div>
        </div>

        <div className={card.cardTime}>
          <span className={card.time}>20 Min</span>
          <div className={card.num}>
            <span className={card.number}>8</span>
          </div>
        </div>
      </div>
    </>
  );
}
