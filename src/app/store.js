import { configureStore } from "@reduxjs/toolkit";
import redditReducer from "../features/Reddit/redditSlice";
import subredditsReducer from "../features/Subreddits/subredditsSlice";
import postReducer from "../features/Post/postSlice";
export default configureStore({
    reducer: {
        reddit: redditReducer,
        subreddits: subredditsReducer,
        post: postReducer
    }, 
    devTools: true
});
/*
Store object idea:
{
    
}








*/