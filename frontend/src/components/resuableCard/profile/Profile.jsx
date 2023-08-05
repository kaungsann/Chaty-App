import React from "react";
import { RxCross2 } from "react-icons/rx";
import profile from "./profile.module.css";
import img from "../../../assets/images.jpeg";
import { MdReportProblem } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
export default function Profile() {
  return (
    <>
      <div className={profile.container}>
        <div className={profile.title}>
          <span className={profile.text}>PROFILE</span>
          <RxCross2 className={profile.cross} />
        </div>
        <div className={profile.imgBox}>
          <img src={img} className={profile.img} />
          <span className={profile.name}>Scott Albright</span>
          <div className={profile.check}>
            <span className={profile.dot}></span>
            <span className={profile.online}>online</span>
          </div>
        </div>
        <div className={profile.aboutCotainer}>
          <div className={profile.aboutBox}>ABOUT</div>
          <div className={`${profile.mediaBox} ${profile.aboutBox}`}>MEDIA</div>
        </div>

        <div className={profile.checkBox}>
          <div className={profile.aboutText}>
            <p className={profile.details}>
              If several languages coalesce, the grammar of the resulting
              language is more simple and regular than that of the individual.
            </p>
            <div className={profile.phoneBox}>
              <span className={profile.bold}>Phone </span>
              <span className={profile.color}>555-555-21541</span>
            </div>
            <div className={profile.phoneBox}>
              <span className={profile.bold}>Email </span>
              <span className={profile.color}>Alberywo@gmail.com</span>
            </div>
            <div className={profile.settngBox}>
              <span className={profile.bold}>SETTING</span>
              <div className={profile.controlBox}>
                <span></span>
                <span className={profile.seText}>BLOCK</span>
              </div>
              <div className={profile.controlBox}>
                <span></span>
                <span className={profile.seText}>MUTE</span>
              </div>
            </div>
          </div>
        </div>

        <div className={profile.warmingBox}>
          <div className={profile.redBox}>
            <MdReportProblem className={profile.warming} />
            <span className={profile.warmText}>Report Chat</span>
          </div>
          <div className={profile.redBox}>
            <RiDeleteBin5Line className={profile.warming} />
            <span className={profile.warmText}>Delete Chat</span>
          </div>
        </div>
      </div>
    </>
  );
}
