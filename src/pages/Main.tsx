import React from "react";
import Card from "./Card";
import Nav from "./Nav";

function Main() {
  return (
    <>
      <Nav></Nav>
      <div className="card_wrapper">
        <Card></Card>
      </div>
    </>
  );
}

export default Main;
