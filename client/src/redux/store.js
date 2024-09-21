import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import chatReducer from "./user/chatSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
// import expireReducer from "redux-persist-transform-expire";

  // var global = window;

const rootReducer = combineReducers({
  user: userReducer,
  chat: chatReducer,
});
// Polyfill global for browser environments

const persistConfig = {
  key: "root",
  storage,
  version: 1,
  // transforms: [
  //   expireReducer("root", {
  //     expireSeconds: 10, // Set expiration time to 1 hour (3600 seconds)
  //     global: window
  //   }),
  // ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
// persistStore(store).purge();

export const persistor = persistStore(store);
