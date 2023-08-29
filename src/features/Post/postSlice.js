import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const loadPost = createAsyncThunk("post/loadPost", async (permalink) => {
  const data = await fetch(`https://www.reddit.com${permalink}.json`);
  const json = await data.json();
  const response = {
    postData: json[0].data,
    commentsData: json[1].data
  }
  return response;
//   return json.map((child) => child.data.children);
});

export const postSlice = createSlice({
  name: "post",
  initialState: {
    permalink: "",
    data: {},
    isLoading: false,
    hasError: false
  },
  reducers: {
    setPostPermalink: (state, action) => {
        state.permalink = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPost.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(loadPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.data = action.payload;
      })
      .addCase(loadPost.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  }
});

export const selectPostData = state => state.post.data;
export const isPostLoading = state => state.post.isLoading;
export const postHasError = state => state.post.hasError;
export const postPermalink = state => state.post.permalink;
export const {setPostPermalink} = postSlice.actions;
export default postSlice.reducer;

