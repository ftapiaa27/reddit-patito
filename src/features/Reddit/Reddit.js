// import './Reddit.css';
import { useSelector, useDispatch } from "react-redux";
import { selectPosts, isRedditLoading, selectCurrentSubreddit, loadPostsForSubreddit, hasErrorState } from "./redditSlice";
import { useEffect } from "react";
const Reddit = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const currentSubReddit = useSelector(selectCurrentSubreddit);
    const isLoading = useSelector(isRedditLoading);
    const hasError = useSelector(hasErrorState);
    
    useEffect(() => {
        // console.log(currentSubReddit);
        dispatch(loadPostsForSubreddit(currentSubReddit));
    }, [currentSubReddit])
    // console.log(posts)

    if (isLoading) {
        return(<h1>LOADING...</h1>)
    }
    if (hasError) {
        return(<h1>FATAL ERROR...</h1>)
    }

    return(
        <div>
            {posts ? <>{posts.map(post => <p>{post.title}</p>)}</> : <p>No posts</p>}
            {/* <p>{currentSubReddit}</p> */}
        </div>
    );
}

export default Reddit;