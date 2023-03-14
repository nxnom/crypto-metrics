import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import store from 'src/redux/store';
import MarketCard from 'src/components/MarketCard';

describe('MarketCard', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <MarketCard
            market={{
              id: '1',
              name: 'Market 1',
              image: '',
              price: 1,
            }}
          />
        </MemoryRouter>
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
