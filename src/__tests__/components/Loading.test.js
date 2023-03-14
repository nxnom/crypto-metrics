import { render } from '@testing-library/react';

import Loading from 'src/components/Loading';

describe('Loading', () => {
  it('renders correctly', () => {
    const { container } = render(<Loading />);
    expect(container).toMatchSnapshot();
  });
});
