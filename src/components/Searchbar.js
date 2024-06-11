import { FaSearch } from "react-icons/fa";
import React from "react";

export default function Searchbar() {
  return (
    <div class="wrapper">
      <div class="icon">
        <FaSearch />
      </div>
      <input placeholder="Search" class="input"></input>
    </div>
  );
}
