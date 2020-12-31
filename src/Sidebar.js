import React from 'react';
import "./Sidebar.css";
import Avatar from '@material-ui/core/Avatar';
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";




function Sidebar() {

  const user = useSelector(selectUser);

    const recentItem = (topic) => (
      <div className="sidebar__recentItem">
          <span className="sidebar__hash">#</span>
          <p>{topic}</p>
      </div>
    )

  return (
    <div  className="sidebar">

        <div  className="sidebar__top">
            <img src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=60" alt="" />
            <Avatar src={user.photoUrl} className="sidebar__avatar"> {user.email[0]} </Avatar>
            <h2>{user.displayName}</h2>
            <h4> {user.email} </h4>
        </div>

        <div className="sidebar__stats">
          <div className="sidebar__stat">
              <p> Profile Viewed </p>
              <p className="sidebar__statNumber"> 264 </p>
          </div>
          <div className="sidebar__stat">
              <p> Posts Viewed </p>
              <p className="sidebar__statNumber"> 1457 </p>
          </div>
        </div>

        <div className="sidebar__bottom">
              <p> Recent </p>
              {recentItem("React JS")}
              {recentItem("Web Developer")}
              {recentItem("Programming")}
        </div>

    </div>
  )
}

export default Sidebar
