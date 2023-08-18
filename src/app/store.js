import { configureStore } from "@reduxjs/toolkit";
import redditReducer from "../features/Reddit/redditSlice";
import subredditsReducer from "../features/Subreddits/subredditsSlice";

export default configureStore({
    reducer: {
        reddit: redditReducer,
        subreddits: subredditsReducer
    }, 
    devTools: true
});
/*
Store object idea:
{
    
}








*/