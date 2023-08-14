// import './Reddit.css';
import { useSelector, useDispatch } from "react-redux";
import { selectPosts, isRedditLoading, selectCurrentSubreddit, loadPostsForSubreddit, hasErrorState } from "./redditSlice";
import { useEffect } from "react";
import PostPrev from "../PostPreview/PostPrev";
import "./reddit.css";

const Reddit = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const currentSubReddit = useSelector(selectCurrentSubreddit);
    const isLoading = useSelector(isRedditLoading);
    const hasError = useSelector(hasErrorState);
    
    useEffect(() => {
        dispatch(loadPostsForSubreddit(currentSubReddit));
    }, [currentSubReddit])

    if (isLoading) {
        return(<h1>LOADING...</h1>)
    }
    if (hasError) {
        return(<h1>FATAL ERROR...</h1>)
    }

    return(
        <div className="reddit">
            <h1>r/{currentSubReddit}</h1>
            {posts ? <>{posts.map(post => <PostPrev  post={post} />)}</> : <p>No posts</p>}
        </div>
    );
}

export default Reddit;