import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  timeout: 1000, // you can define your time. But is required.
  key: 'root',
  storage,
  // whitelist: ['app'],
};

const persistEnhancer = () => createStore => (reducer, initialState, enhancer) => {
  const store = createStore(persistReducer(persistConfig, reducer), initialState, enhancer);
  const persist = persistStore(store, null);
  return {
    persist,
    ...store,
  };
};

export const dva = {
  config: {
    extraEnhancers: [persistEnhancer()],
    onError(err: ErrorEvent) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};
