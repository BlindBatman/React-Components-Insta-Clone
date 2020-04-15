//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import Data from "D:/git stuff/React-Components-Insta-Clone/src/dummy-data.js"
// import data 

const PostsPage = () => {
  // set up state for your data
  const [post,setPost] = useState(Data);
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      
      {post.map((dataObj, index) => {
          return (
            <Post
              key={index}
              post={dataObj}            
            />
          );
        })}

    </div>
  );
};

export default PostsPage;
