import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import chat from "../../assets/chat2.gif";
import emoji from "../../assets/emoji.gif";
import responsive from "../../assets/res.gif";
import home from "./home.module.css";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <>
      <div className={home.navContainer}>
        <span className={home.navText}>Free chat rooms</span>
        <div className={home.navBox}>
          <img src={logo} className={home.navLogo} />
          <span className={home.navTitle}>Chaty</span>
        </div>
        <div className={home.linkBox}>
          <Link to="/login">
            <span className={home.navLogin}>Login</span>
          </Link>
          <Link to="/register">
            <span className={home.navRegister}>Chaty Free Registration</span>
          </Link>
        </div>
      </div>
      <div>
        <div className={home.moreBox}>
          <span className={home.moreText}>More than messaging</span>
          <p className={home.msg}>
            Chaty is a free chat room website where you can have live chat with
            single women and men, you can discuss with random strangers from
            USA, Canada, United Kingdom, Australia and people from all over the
            world, at the same time in multiple chatrooms and discussion groups,
            any time you can start a private conversation to meet girls and boys
            living nearby in your area.
          </p>
        </div>
        <div className={home.animateBox}>
          <div className={home.Box}>
            <img src={chat} className={home.image} />
            <div className={home.texBox}>
              <span className={home.boxTitle}>Group Chat and Private Chat</span>
              <p className={home.paragraph}>
                Meet new single women and men everyday without limits, make
                friendships, for free you can have a live discussion now without
                registration! Chaty is an online free chat rooms. Here you can
                meet new friends from all over the world. No download, no setup
                ,reply to messages in group chats or start a group chat
                instantly
              </p>
            </div>
          </div>
          <div className={home.Box}>
            <img src={emoji} className={home.image} />
            <div className={home.texBox}>
              <span className={home.boxTitle}>Icons And Stickers</span>
              <p className={home.paragraph}>
                Stickers and icons for every possible expression. Not enough?
                Create your own instantly , reply to messages in group chats or
                start a group chat,n addition to displaying emojis in chat
                messages, you can also implement emoji reactions. This allows
                users to respond to messages with emojis, similar to how social
                media platforms handle reactions.
              </p>
            </div>
          </div>
          <div className={home.Box}>
            <img src={responsive} className={home.image} />
            <div className={home.texBox}>
              <span className={home.boxTitle}>On Mobile and Desktop</span>
              <p className={home.paragraph}>
                : Regularly test chat app on various devices, including
                smartphones, tablets, laptops, and desktops. Ensure that emojis
                and chat messages are readable and displayed correctly on each
                device. instantly
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
