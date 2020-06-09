// You will add code in this file
import React from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = (props) => {
  // set up state for the likes
  const { postData } = props;

  return (
    <div className="post-border">
      <PostHeader
        username={postData.username}
        thumbnailUrl={postData.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={postData.imageUrl}
        />
      </div>
      <LikeSection />
      <CommentSection postId={postData.imageUrl} comments={postData.comments} />
    </div>
  );
};

export default Post;
