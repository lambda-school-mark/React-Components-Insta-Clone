//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data
import dummyData from "../../dummy-data";
import LikeSection from "./LikeSection";

const PostsPage = () => {
  // set up state for your data
  const [posts, setPosts] = useState(dummyData);
  //! do you need setPosts???

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {posts.map((post) => {
        return <Post postData={post} />;
      })}
      {<LikeSection />}
    </div>
  );
};

export default PostsPage;
