import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';

import counterReducer from '@/store/counter';

const persistConfiguration = {
  key: 'root',
  storage,
  version: 1,
  whitelist: ['counter']
};

export const rootReducer = combineReducers({
  counter: counterReducer
});

const persistedReducer = persistReducer(persistConfiguration, rootReducer);

export const store = configureStore({
  devTools: import.meta.env.VITE_ENV !== 'prod',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }),
  reducer: persistedReducer
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
