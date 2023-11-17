import { configureStore, combineReducers } from '@reduxjs/toolkit';


export default configureStore({
    reducer: combineReducers({
        reddit: redditReducer,
        subreddits: subRedditReducer,
    }),
});