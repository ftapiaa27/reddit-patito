import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import {
  selectPostData,
  isPostLoading,
  postHasError,
  loadPost,
  postPermalink,
} from "./postSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import PostPrev from "../PostPreview/PostPrev";
import PostView from "../PostView/PostView";
import "./post.css";
import Comment from "../Comment/Comment";

const Post = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectPostData);
  const isLoading = useSelector(isPostLoading);
  const hasError = useSelector(postHasError);
  const permalink = useSelector(postPermalink);

  useEffect(() => {
    dispatch(loadPost(permalink));
  }, [dispatch]);

  if (isLoading) {
    return <h1>LOADING...</h1>;
  }
  if (hasError) {
    return <h1>FATAL ERROR...</h1>;
  }
  if (!isLoading && data) {
    return (
      <div className="post">
        <PostView post={data.postData}/>
        {data.commentsData.map(comment => <Comment comment={comment} />)}
      </div>
    );
  }
};

export default Post;
