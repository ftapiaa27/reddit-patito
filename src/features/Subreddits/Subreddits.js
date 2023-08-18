import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSubreddits, areSubredditsLoading, subredditsHasError, loadSubreddits } from "./subredditsSlice";
import "./subreddits.css";
import SubredditPrev from "../SubredditPrev/subredditPrev";

const Subreddits = () => {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const hasError = useSelector(subredditsHasError);
    const isLoading = useSelector(areSubredditsLoading);

    useEffect(() => {
        dispatch(loadSubreddits());
    }, [])
    
    if (isLoading) {
        return(<h1>LOADING...</h1>)
    }

    if (hasError) {
        return(<h1>FATAL ERROR...</h1>)
    }

    return (
        <div className="subreddits">
            <h2>Subreddits</h2>
            {subreddits ? subreddits.map(subreddit => <SubredditPrev subreddit={subreddit} />) : <p>No subbredits</p>}
        </div>
    );
}

export default Subreddits;