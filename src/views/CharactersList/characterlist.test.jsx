import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
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

    await screen.findByText(/Aaron Stack/i, undefined, {
      timeout: 5000
    });


    const list = screen.getAllByRole('listitem');
    expect(list).toHaveLength(99);

    const character = screen.getByRole('link', { name: /aaron stack/i});
    screen.debug(character);

    userEvent.click(character);

    screen.getByRole('heading', { level: 1, name: /aaron stack/i})
  })
})