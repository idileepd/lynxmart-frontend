import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { counterReducer } from "./counter";
// import { appReducer } from "./app";
// import { businessReducer } from "./business";
// import { menuReducer } from "./menu";

const allReducers = combineReducers({
  counter: counterReducer,
  //   app: appReducer,
  //   business: businessReducer,
  //   menu: menuReducer,
});

export const store = configureStore({
  reducer: allReducers,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
