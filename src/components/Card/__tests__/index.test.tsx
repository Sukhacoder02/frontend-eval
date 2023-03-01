import * as React from 'react';
import Card from '..';
import { render } from '@testing-library/react';
import { mockEvent } from '../../../__mocks__/components/card';

const card = (
  <Card
    theme={1}
    key={mockEvent.id}
    id={mockEvent.id}
    venue={mockEvent.venue}
    name={mockEvent.name}
    description={mockEvent.description}
    areSeatsAvailable={mockEvent.areSeatsAvailable}
    datetime={mockEvent.datetime}
    timezone={mockEvent.timezone}
    isRegistered={mockEvent.isRegistered}
    isBookmarked={mockEvent.isBookmarked}
    imgUrl={mockEvent.imgUrl}
  />
);
describe('Component Card', () => {
  it('Should render without crashing', () => {
    const { asFragment } = render(card);
    expect(asFragment()).toMatchSnapshot();
  });
});
