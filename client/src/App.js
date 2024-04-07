import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.css';
import M from 'materialize-css';
import './App.css';

import AuthState from './context/auth/AuthState';
import ProfileState from './context/profile/ProfileState';
import ProductState from './context/product/ProductState';
import FeedbackState from './context/feedback/FeedbackState';
import ReviewState from './context/review/ReviewState';

import Landing from './components/landing/Landing';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import Admin from './components/admin/Admin';
import Consumer from './components/consumer/Consumer';
import Producer from './components/producer/Producer';
import Profile from './components/profile/Profile';
import Navbar from './components/layout/Navbar';

import setAuthToken from './utils/setAuthToken';
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <AuthState>
      <ProfileState>
        <ProductState>
          <FeedbackState>
            <ReviewState>
              <Navbar />
              <Router>
                <Routes>
                  <Route exact path='/' component={Landing} />
                  <Route exact path='/signup' component={SignUp} />
                  <Route exact path='/signin' component={SignIn} />
                  <Route exact path='/admin' component={Admin} />
                  <Route exact path='/profile' component={Profile} />
                  <Route exact path='/consumer' component={Consumer} />
                  <Route exact path='/producer' component={Producer} />
                </Routes>
              </Router>
            </ReviewState>
          </FeedbackState>
        </ProductState>
      </ProfileState>
    </AuthState>
  );
};

export default (App);
