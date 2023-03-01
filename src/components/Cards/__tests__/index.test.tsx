import * as React from 'react';
import Cards from '..';
import { render } from '@testing-library/react';
import { mockCardsProps } from '../../../__mocks__/components/cards';

describe('Component Cards', () => {
  it('Should render without crashing', () => {
    const { asFragment } = render(<Cards {...mockCardsProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('Should display loading when events are not loaded yet', () => {
    const { getByText } = render(<Cards {...mockCardsProps} />);
    expect(getByText('Loading...')).toBeTruthy();
  });
});
