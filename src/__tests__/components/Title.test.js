import { render } from '@testing-library/react';

import Title from 'src/components/Title';

describe('Title', () => {
  it('renders correctly', () => {
    const { container } = render(<Title>Title</Title>);
    expect(container).toMatchSnapshot();
  });
});
