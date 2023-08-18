import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadSubreddits = createAsyncThunk(
    'subreddits/loadSubreddits', 
    async() => {
        const data = await fetch('https://www.reddit.com/subreddits.json');
        const json = await data.json();
        return json.data.children.map(child => child.data);

        // const response = [];
        // for (let i=0; i < 15; i++) {
        //     response.push(json.data.children[i].data)
        // }
        // console.log(response);
        // return response;
    });

export const subredditsSlice = createSlice({
    name: "subreddits",
    initialState: {
        subreddits: [],
        isLoading: false,
        hasError: false
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadSubreddits.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(loadSubreddits.rejected, (state) => {
                state.isLoading = false;
                state.hasError = true;
            })
            .addCase(loadSubreddits.fulfilled, (state, action) => {
                state.subreddits = action.payload;
                state.isLoading = false;
                state.hasError = false;
            })
    }
    
});

export const selectSubreddits = state => state.subreddits.subreddits;
export const areSubredditsLoading = state => state.subreddits.isLoading;
export const subredditsHasError = state => state.subreddits.hasError;
export default subredditsSlice.reducer;