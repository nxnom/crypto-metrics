import { configureStore } from '@reduxjs/toolkit';

import api from './services/api';
import filterReducer from './filter/filterSlice';

const store = configureStore({
  reducer: {
    filters: filterReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export default store;
