import React, {useState} from 'react';
import "./Login.css";
import {auth} from './firebase';
import {login } from "./features/userSlice";
import {useDispatch} from "react-redux";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const register = () => {
        if(!name){
          return alert("Please Enter Full Name");
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
          userAuth.user.updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(login({
              email : userAuth.user.email,
              uid : userAuth.user.uid,
              displayName: name,
              photoUrl: profilePic,
            }));
          });
        }).catch(error => alert(error));
  };

  const loginToApp = (e) => {
      e.preventDefault();
      auth.signInWithEmailAndPassword(email, password)
      .then(userAuth => {
        dispatch(login({
          email : userAuth.user.email,
          uid : userAuth.user.uid,
          displayName: name,
          profileUrl : userAuth.user.photoURL,
        }))
      }).catch(error => alert(error));
  }

  return (
    <div className="login">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROp-tVE-R6e5Uw_LRnOl1kC5MMXciei-j0VQ&amp;usqp=CAU" alt="" />
        <form >
            <input type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Full Name (Required if registering)"
            />

            <input
             type="text"
             placeholder="Profile Picture - URL"
             value={profilePic}
             onChange= { e => setProfilePic(e.target.value)}
             />

            <input
             type="email"
             value={email}
             onChange={e => setEmail(e.target.value)}
             placeholder="Email"
             />

            <input
             type="password"
             value={password}
             onChange={e => setPassword(e.target.value)}
             placeholder="Password"
             />

            <button type="submit" onClick={loginToApp}> Sign In </button>

        </form>
        <p>New user? {" "}
            <span className="login__register" onClick={register}> Register now </span>
         </p>
    </div>
  )
}

export default Login;
