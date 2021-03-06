import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Userinfo from "./pages/Userinfo";
import Main from "./pages/Mainpage/Main";
import Mypage from "./pages/Mypage/Mypage";
import Upload from "./pages/Upload";
import NotFound from "./pages/NotFound";
import axios from "axios";
import ReviewModal from "./pages/Modalpage/ReviewModal";
import CardModalPage from "./pages/Modalpage/CardModalPages";
import ConfirmEmail from "./pages/ConfirmEmail";
import FindPassword from "./pages/FindPassword";
import IsValidToken from "./pages/ResetPassword";

axios.defaults.baseURL = "http://13.209.17.108:5000";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/userinfo" component={Userinfo} />
        <Route exact path="/mypage" component={Mypage} />
        <Route exact path="/upload" component={Upload} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/" component={Intro} />
        <Route exact path="/cardmodal/:id" component={CardModalPage} />
        <Route exact path="/mail/confirmmail" component={ConfirmEmail} />
        <Route exact path="/cardmodalpages/:id" component={CardModalPage} />
        <Route exact path="/findpassword" component={FindPassword} />
        <Route exact path="/mail/isvalidtoken/" component={IsValidToken} />
        <Route eact path="/reviewmodal" component={ReviewModal} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
