import { Link, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <Switch>
      <Route path="/characters/:id">
        <CharacterDetail />
      </Route>
      <Route path="/characters">
        <CharactersList />
      </Route>
      <Route path="/">
        <Link to="/characters">View Marvel Characters<Link />
      </Route>
    </Switch>
  );
}
