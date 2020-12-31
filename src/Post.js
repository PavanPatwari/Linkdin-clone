import React from 'react';
import "./Post.css";
import Avatar from '@material-ui/core/Avatar';
import InputOption from "./InputOption";
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";

function Post({name, description, message, photoUrl}) {

  const user = useSelector(selectUser);

  return (
    <div className="post">
        <div className="post__header">
            <Avatar src={photoUrl}>{name[0]}</Avatar>
            <div className="post__info">
                <h2> {name} </h2>
                <p> {description} </p>
            </div>
        </div>

        <div className="post__body">
            <p> {message} </p>
        </div>

        <div className="post__buttons">
        <InputOption color="gray" Icon={ThumbUpAltOutlinedIcon} title="Like" />
        <InputOption color="gray" Icon={ChatOutlinedIcon} title="Comment" />
        <InputOption color="gray" Icon={ShareOutlinedIcon} title="Share" />
        <InputOption color="gray" Icon={SendOutlinedIcon} title="Send" />
        </div>

    </div>
  )
}

export default Post
