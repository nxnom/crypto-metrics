import { configureStore } from '@reduxjs/toolkit';

import filterSlice, { setCurrency } from 'src/redux/filter/filterSlice';

describe('filterSlice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        filter: filterSlice,
      },
    });
  });

  it('should set the currency filter', () => {
    store.dispatch(setCurrency('eur'));

    expect(store.getState().filter.currency).toEqual('eur');
  });
});
