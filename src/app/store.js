import { configureStore } from "@reduxjs/toolkit";
import redditReducer from "../features/Reddit/redditSlice";

export default configureStore({
    reducer: {
        reddit: redditReducer
    }, 
    devTools: true
});
/*
Store object idea:
{
    
}








*/