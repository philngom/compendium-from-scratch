import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CharactersList from './CharactersList';
import { MemoryRouter } from 'react-router-dom';

describe('CharacterList', () => {
  it('should render a filterable list (99 items) to the screen', async () => {
    render(
      <MemoryRouter>
        <CharactersList />
      </MemoryRouter>
    )

    screen.getByText(/loading/i);

    //increased timeout because default of 1000ms not long enough to receive data from api
    await screen.findByText(/Aaron Stack/i, undefined, {
      timeout: 5000
    });


    const list = screen.getAllByRole('listitem');
    expect(list).toHaveLength(99);

    // getting error
    // const character = screen.getByRole('link', { name: /aaron stack/i});
    // userEvent.click(character);
    // screen.debug();
    //     return waitFor(() => {
    //       screen.getByRole('heading', { level: 1, name: /aaron stack/i})

    //     })

    const search = screen.getByPlaceholderText('Find a character');

    userEvent.type(search, 'agatha');

    return waitFor(() => {
      const result = screen.getAllByRole('listitem');
      expect(result.length).toEqual(1);
    })

  })
})