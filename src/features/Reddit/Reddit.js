// import './Reddit.css';
import { useSelector, useDispatch } from "react-redux";
import {
  selectPosts,
  isRedditLoading,
  selectCurrentSubreddit,
  loadPostsForSubreddit,
  hasErrorState,
  loadSearchResults,
  selectRedditSearchTerm,
} from "./redditSlice";
import { useEffect, useState } from "react";
import PostPrev from "../PostPreview/PostPrev";
import "./reddit.css";
import { Outlet } from "react-router";

const Reddit = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const currentSubReddit = useSelector(selectCurrentSubreddit);
  const currentSearchTerm = useSelector(selectRedditSearchTerm);
  const isLoading = useSelector(isRedditLoading);
  const hasError = useSelector(hasErrorState);
  const [title, setTitle] = useState("Reddit Patito");

  useEffect(() => {
    dispatch(loadPostsForSubreddit(currentSubReddit));
    setTitle(`/r${currentSubReddit}`);
  }, [currentSubReddit, dispatch]);

  useEffect(() => {
    if (currentSearchTerm) {
      dispatch(loadSearchResults(currentSearchTerm));
      setTitle(`${currentSearchTerm}`);
    }
  }, [currentSearchTerm, dispatch]);

  if (isLoading) {
    return <h1>LOADING...</h1>;
  }
  if (hasError) {
    return <h1>FATAL ERROR...</h1>;
  }

  return (
    <div className="content">
      <div className="reddit">
        <h1>{title}</h1>
        {posts ? (
          posts.map((post) => <PostPrev post={post} />)
        ) : (
          <p>No posts</p>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default Reddit;
