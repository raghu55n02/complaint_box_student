import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import Complaint from "./views/complaint/Complaint"
import MyComplaints from './views/MyComplaints/MyComplaints';
import Notices from './views/Notices/Notices'
import Replies from './views/Replies/Replies'
function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, true)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/complaint" component={Auth(Complaint, true)} />
          <Route exact path="/MyComplaints" component={Auth(MyComplaints, true)} />
          <Route exact path="/Notices" component={Auth(Notices, true)} />
          <Route exact path="/Replies" component={Auth(Replies, true)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
