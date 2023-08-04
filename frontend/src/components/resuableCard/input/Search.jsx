import React from "react";
import input from "./search.module.css";
import { BiSearchAlt2 } from "react-icons/bi";
export default function Search() {
  return (
    <>
      <div className={input.searchBox}>
        <input
          type="text"
          placeholder="Search Contancts"
          id="text"
          className={input.input}
        />
        <BiSearchAlt2 className={input.icons} />
        <div></div>
      </div>
    </>
  );
}
