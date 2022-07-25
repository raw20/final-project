import { configureStore, combineReducers } from "@reduxjs/toolkit";
import headerStateSlice from "./headerStateSlice";
import storageSession from "redux-persist/lib/storage/session"; //세션스토리지
import { persistReducer } from "redux-persist";
import aboutMeWriteSlice from "./aboutMeWriteSlice";
import detailSlice from "./detailSlice";
const persistConfig = {
  key: "root",
  storage: storageSession,
};

const rootReducer = combineReducers({
  headerLayout: headerStateSlice,
  aboutMeWriter: aboutMeWriteSlice,
  item: detailSlice,
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
