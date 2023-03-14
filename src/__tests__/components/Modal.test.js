import { render } from '@testing-library/react';

import Modal from 'src/components/Modal';

describe('Modal', () => {
  it('renders correctly', () => {
    const { container } = render(<Modal isOpen>Modal Content</Modal>);
    expect(container).toMatchSnapshot();
  });
});
