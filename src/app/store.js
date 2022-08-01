import { configureStore, combineReducers } from "@reduxjs/toolkit";
import headerStateSlice from "./headerStateSlice";
import storageSession from "redux-persist/lib/storage/session"; //세션스토리지
import { persistReducer } from "redux-persist";
import userReducer from "./userSlice";
import userSlice from "./userSlice";
import aboutMeWriteSlice from "./aboutMeWriteSlice";
import detailSlice from "./detailSlice";
import searchTableSlice from "./searchTableSlice";
import footerStateSlice from "./footerStateSlice";

const persistConfig = {
  key: "root",
  storage: storageSession,
};

const rootReducer = combineReducers({
  headerLayout: headerStateSlice,
  user: userSlice,
  aboutMeWriter: aboutMeWriteSlice,
  item: detailSlice,
  table: searchTableSlice,
  footer: footerStateSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
