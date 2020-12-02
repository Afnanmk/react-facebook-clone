import { Avatar } from "@material-ui/core"
import {
  // AccountCircle,
  // ExpandMoreOutlined,
  NearMe,
  ThumbUp,
  ChatBubbleOutline,
  DeleteOutlineOutlined
} from "@material-ui/icons"
import React from "react"
import db from "../firebase"
import "./Posts.css"

function Posts({ profilePic, image, username, timestamp, message, post }) {
  return (
    <div className="posts">
      <div className="posts__top">
        <Avatar src={profilePic} className="posts__avatar" />
        <div className="posts__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>

      <div className="posts__bottom">
        <p>{message}</p>
      </div>

      <div className="posts__image">
        <img src={image} alt="" />
      </div>

      <div className="posts__options">
        <div className="posts__option">
          <ThumbUp />
          <p>Like</p>
        </div>
        <div className="posts__option">
          <ChatBubbleOutline />
          <p>Comment</p>
        </div>
        <div className="posts__option">
          <NearMe />
          <p>Share</p>
        </div>
        <div className="posts__option">
          <DeleteOutlineOutlined
            // here (post) is the post id from Feed.js file ,imported here as props
            onClick={() => db.collection("posts").doc(post).delete()}
          />
          <p onClick={() => db.collection("posts").doc(post).delete()}>
            Delete
          </p>
        </div>
      </div>
    </div>
  )
}

export default Posts
