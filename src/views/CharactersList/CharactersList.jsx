import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import md5 from 'md5';

export default function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      const ts = Date.now();
      const hash = md5(ts + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY);

      const response = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${process.env.PUBLIC_KEY}&hash=${hash}&limit=99`);

      const data = await response.json();

      const characterData = data.data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          img: character.thumbnail.path + '.' + character.thumbnail.extension
        }
      })

      setCharacters(characterData);
      setIsLoading(false);
    }
    fetchCharacters();
  }, [])

  return (
    <>
    <h1>List Of Marvel Characters</h1>
    <Link to='/'>Back to homepage</Link>
    {isLoading ? (
      <p>Loading...</p>
    ) : (
    <ul>
    {
      characters.map((character) => {
        return (
          <Link to={`/character/${character.id}`}>
            <li key={character.id}>
              {character.name}
            </li>
          </Link>
        )
      })
    }
    </ul>
    )
  }
    </>
  )
}