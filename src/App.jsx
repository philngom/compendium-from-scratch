import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import CharactersList from './views/CharactersList/CharactersList';
import Character from './views/Character/Character';

export default function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/character/:id">
        <Character />
      </Route>
      <Route path="/characters">
        <CharactersList />
      </Route>
      <Route exact path="/">
        <h1>Home Page</h1>
        <Link to="/characters">View Marvel Characters</Link>
      </Route>
    </Switch>
    </BrowserRouter>
  );
}
