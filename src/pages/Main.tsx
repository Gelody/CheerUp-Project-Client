import React from "react";
import Card from "./Card";
import SnsShare from "./SnsShare"
import Nav from "./Nav";

function Main() {

  return (
    <>
      <Nav />
      <div className="card_wrapper">
        <Card />
        <SnsShare />
      </div>
    </>
  );
}

export default Main;
