import React from "react";
import Header from "./Header";
import Maincontent from "./Maincontent";
export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <Maincontent />
      <main>{children}</main>
    </div>
  );
}
