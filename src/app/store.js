import { configureStore, combineReducers } from "@reduxjs/toolkit";
import headerStateSlice from "./headerStateSlice";
import storage from "redux-persist/lib/storage"; //로컬스토리지
import { persistReducer } from "redux-persist";
import userReducer from './userSlice';
import userSlice from './userSlice';

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  headerLayout: headerStateSlice,
  user: userSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  user: userReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
