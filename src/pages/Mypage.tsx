import React from "react";
import Dashboard from "./Dashboard";
import MycardList from "./MycardList";
import CheeringList from "./CheeringList";
import Nav from "./Nav";

function Mypage() {
  return (
    <>
      <Nav></Nav>
      <Dashboard></Dashboard>
      <MycardList></MycardList>
      <CheeringList></CheeringList>
    </>
  );
}

export default Mypage;
