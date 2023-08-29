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

const Post = () => {
  const dispatch = useDispatch();
  const postData = useSelector(selectPostData);
  const isLoading = useSelector(isPostLoading);
  const hasError = useSelector(postHasError);
  const permalink = useSelector(postPermalink);
  const [postInfo, setPostInfo] = useState(null);
  const [commentsInfo, setCommentsInfo] = useState(null);

  useEffect(() => {
    dispatch(loadPost(permalink));
    // setPostInfo(postData[0][0].data);
    // setCommentsInfo(postData[1]);
  }, []);

  if (isLoading) {
    return <h1>LOADING...</h1>;
  }
  if (hasError) {
    return <h1>FATAL ERROR...</h1>;
  }
  return (
    <div className="post">
      <h1>/</h1>
    </div>
  );
};

export default Post;
