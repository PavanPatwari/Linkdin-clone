import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useSelector } from "react-redux";
import {selectUser, logout, login} from "./features/userSlice";
import Login from "./Login";
import {auth} from "./firebase";
import {useDispatch} from "react-redux";
import firebase from "./firebase";


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
          if(userAuth){
                //User logged in
                dispatch(login({
                  email : userAuth.email,
                  uid : userAuth.uid,
                  displayName: userAuth.displayName,
                  photoUrl: userAuth.photoURL,
                }));
          }
          else{
                  //User logged out
                  dispatch(logout());
          }
        })

      }, [])

  return (
    <div className="app">
      
        {/* Header Nav */}

        {!user ? (
          <Login />
        ) : (
        <div>
        <Header />
          <div className="app__body">

            <Sidebar />
            <Feed />
            {/* widgets */}
          </div>
        </div>
        )}


    </div>
  );
}

export default App;
