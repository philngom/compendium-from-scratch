import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Character() {

  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchCharacter = async () => {
      const ts = Date.now();
      const hash = md5(ts + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY);
      const character = await fetch(`https://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${process.env.PUBLIC_KEY}&hash=${hash}`);

      const data = await response.json();
      console.log("🚀 ~ file: Character.jsx ~ line 18 ~ fetchCharacter ~ data", data)

    }
    fetchCharacter();
  }, [])

  return (
    <>
    <p>hey</p>
    </>
  )
}