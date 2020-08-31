import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Userinfo from "./pages/Userinfo";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Upload from "./pages/Upload";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/userinfo">
          <Userinfo />
        </Route>
        <Route exact path="/mypage">
          <Mypage />
        </Route>
        <Route exact path="/upload">
          <Upload />
        </Route>
        <Route exact path="/main/:id" component={Main} />
        <Route exact path="/">
          <Intro />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
