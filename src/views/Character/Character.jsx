import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import md5 from 'md5';

export default function Character() {

  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchCharacter = async () => {
      console.log(id);
      const ts = Date.now();
      const hash = md5(ts + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY);
      const response = await fetch(`https://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${process.env.PUBLIC_KEY}&hash=${hash}`);

      const data = await response.json();

      const character = {
        id: data.data.results[0].id,
        name: data.data.results[0].name,
        img: data.data.results[0].thumbnail.path + '.' + data.data.results[0].thumbnail.extension
      }


      setCharacter(character);
      setIsLoading(false);

    }
    fetchCharacter();
  }, [])

  return (
    <>
    <ul>
    <Link to='/'>
      <li>Homepage</li>
    </Link>
    <Link to='/characters'>
      <li>Marvel characters</li>
    </Link>
    </ul>
    {
      isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
        <h1>{character.name}</h1>
        <img src={character.img} alt='character-image'></img>
        </>
      )
    }
    </>
  )
}