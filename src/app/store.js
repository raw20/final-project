import { configureStore, combineReducers } from "@reduxjs/toolkit";
import headerStateSlice from "./headerStateSlice";
import storage from "redux-persist/lib/storage"; //로컬스토리지
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  headerLayout: headerStateSlice,
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
