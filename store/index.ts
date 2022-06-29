import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import promiseMiddleware from 'redux-promise';
import appSlice from './modules/appSlice';
import userSlice from './modules/userSlice';

// 数据持久化配置
const persistConfig = {
  key: 'root',
  storage,
};

// 配置reducers
const reducers = combineReducers({
  app: appSlice,
  user: userSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

// 配置store
export const store = configureStore({
  reducer: persistedReducer,
  // 中间件，实现网络请求，异步操作，中间件等
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([promiseMiddleware]),
});

// 持久存储Store
export const persister = persistStore(store);

// 根root状态，并且导出
export type RootState = ReturnType<typeof store.getState>;
