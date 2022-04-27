import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Character from './Character';

describe('Character', () => {
  it('renders a character', async () => {
    render(
      <MemoryRouter initialEntries={['/character/1012717']}
      initialIndex={0}
      >
            <Character />
      </MemoryRouter>
    );
      screen.debug();
  })
})