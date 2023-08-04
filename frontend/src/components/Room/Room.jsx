import React from "react";
import { AiOutlineUsergroupAdd, AiOutlinePlus } from "react-icons/ai";
import { MdGroupAdd } from "react-icons/md";
import chat from "./room.module.css";
import Search from "../resuableCard/input/Search";
import ChatCard from "../resuableCard/chatBox/ChatCard";
export default function Room() {
  return (
    <>
      <div>
        <div className={chat.chatRooms}>
          <div className={chat.titleBox}>
            <span className={chat.chats}>CHATS</span>
            <div className={chat.btnBox}>
              <button className={chat.btn}>
                <MdGroupAdd className={chat.addIcons} />
              </button>
              <button className={chat.btn}>
                <AiOutlinePlus className={chat.addIcons} />
              </button>
            </div>
          </div>
          <div className={chat.searchBox}>
            <Search />
          </div>
          <span className={chat.recent}>RECENT CHATS</span>

          <div className={chat.card}>
            <ChatCard />
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </>
  );
}
