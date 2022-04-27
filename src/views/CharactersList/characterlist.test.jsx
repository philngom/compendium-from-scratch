import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import CharactersList from './CharactersList';
import { MemoryRouter } from 'react-router-dom';

describe('CharacterList', () => {
  it('should render a filterable list (99 items) to the screen', async () => {
    // jest.setTimeout(10000);
    render(
      <MemoryRouter>
        <CharactersList />
      </MemoryRouter>
    )

    screen.getByText(/loading/i);

    await screen.findByText(/Aaron Stack/i);

      // return waitFor(() => {
      //   const list = screen.getAllByRole('listitem');
      //   console.log(list);
      // })

    // const list = await screen.getAllByRole('listitem');




  })
})