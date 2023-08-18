import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadPostsForSubreddit = createAsyncThunk(
    'posts/loadPostsForSubreddit',
    async (subreddit) => {
        const data = await fetch(`https://www.reddit.com/r/${subreddit}/.json`);
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
        const data = await fetch(`https://www.reddit.com/search.json?q=${searchTerm}`);
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

export const redditSlice = createSlice({
    name: "reddit",
    initialState: {
        posts: [],
        searchTerm: "",
        currentSubReddit: "Damnthatsinteresting",
        isLoading: false,
        hasError: false
    },  
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        setCurrentSubreddit: (state, action) => {
            state.currentSubReddit = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadPostsForSubreddit.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(loadPostsForSubreddit.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasError = false;
                state.posts = action.payload;
            })
            .addCase(loadPostsForSubreddit.rejected, (state) => {
                state.isLoading = false;
                state.hasError = true;
                // state.posts = {};
            })
            .addCase(loadSearchResults.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(loadSearchResults.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasError = false;
                state.posts = action.payload;
                state.searchTerm = "";
                state.currentSubReddit = "";
            })
            .addCase(loadSearchResults.rejected, (state) => {
                state.isLoading = false;
                state.hasError = true;
            })
    }
});

export const { setSearchTerm, setCurrentSubreddit } = redditSlice.actions;
export const selectPosts = (state) => state.reddit.posts;
export const isRedditLoading = (state) => state.reddit.isLoading;
export const hasErrorState = (state) => state.reddit.hasError;
export const selectRedditSearchTerm = (state) => state.reddit.searchTerm;
export const selectCurrentSubreddit = (state) => state.reddit.currentSubReddit;
export default redditSlice.reducer;