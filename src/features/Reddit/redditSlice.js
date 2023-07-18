import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { redditURL } from "../../reddit api/reddit";

export const loadPostsForSubreddit = createAsyncThunk(
    'posts/loadPostsForSubreddit',
    async (subreddit) => {
        const data = await fetch(`${redditURL}r/${subreddit}/.json`);
        const json = await data.json();
        return json.data.children.map(child => child.data);
        /** Note:
         *  Actually used fields:
         *  - subreddit
         *  - author
         *  - title
         *  - ups
         *  - downs
         *  - thumbnail
         *  - num_comments
         */
    }
)

export const loadSearchResults = createAsyncThunk(
    'search/loadResults',
    async (searchTerm) => {
        const data = await fetch(`${redditURL}search.json?q=${searchTerm}`);
        const json = await data.json();
        return json.data.children.map(child => child.data);
        /** Note:
         *  Actually used fields:
         *  - subreddit
         *  - author
         *  - title
         *  - ups
         *  - downs
         *  - thumbnail
         *  - num_comments
         */
    }
)

export const reddit = createSlice({
    name: "reddit",
    initialState: {
        posts: {},
        searchTerm: "",
        currentSubReddit: "Damnthatsinteresting",
        isLoading: false,
        hasError: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadPostsForSubreddit.pending, (state) => {
                isLoading = true;
                hasError = false;
            })
            .addCase(loadPostsForSubreddit.fulfilled, (state, action) => {
                isLoading = false;
                hasError = false;
                state.posts = action.payload;
            })
            .addCase(loadPostsForSubreddit.failed, (state) => {
                isLoading = false;
                hasError = true;
            })
            .addCase(loadSearchResults.pending, (state) => {
                isLoading = true;
                hasError = false;
            })
            .addCase(loadSearchResults.fulfilled, (state, action) => {
                isLoading = false;
                hasError = false;
                state.posts = action.payload;
                state.searchTerm = "";
                state.currentSubReddit = "";
            })
            .addCase(loadSearchResults.failed, (state) => {
                isLoading = false;
                hasError = true;
            })
    }
});