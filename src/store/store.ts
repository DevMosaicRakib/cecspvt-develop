import { configureStore, combineReducers } from "@reduxjs/toolkit";
import projectsReducer from "./slices/projects.slice";
import {
  persistReducer
} from "redux-persist";
import storage from "redux-persist/lib/storage";
// import createWebStorage from "redux-persist/es/storage/createWebStorage";

const combinedReducers = combineReducers({
  projects: projectsReducer

})

const persistedReducer = persistReducer({ key: "projects", storage: storage, whitelist: ["projects"] }, combinedReducers)
const store = configureStore({
  reducer: {
    projects: persistedReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export { store };
