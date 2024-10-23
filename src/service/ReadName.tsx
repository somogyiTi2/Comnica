import { useEffect, useState } from 'react';
import { ReadUserProps } from '../types/ReadUserProps';

const ReadName: React.FC<ReadUserProps> = ({ setNames }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMovieHandler = async () => {
    setIsLoading(true);
    setError(null);
    const link = process.env.REACT_APP_API_LINK
    try {
      const response = await fetch(`${link}names.json`);
      if (!response.ok) {
        throw new Error('Valami hiba van!');
      }
      const data = await response.json();
      const loadedNames: any[] = [];

      for (const key in data) {
        const item = data[key];

        if (item.name || item.secundName) {
          loadedNames.push({
            name: item.name?.trim() || ''
          });
        }
      }
      setNames(loadedNames);
    } catch (error: any) {
      setError(error.message);
      console.log(error, "name error")
    }
    setIsLoading(false);
    console.log(!isLoading, "name finish loaded")
  };

  useEffect(() => {
    fetchMovieHandler();
  }, []);

  return <>
    {isLoading && <h1>Loading...</h1>}
    {error && <h1>Error in Names</h1>}
  </>;
};

export default ReadName;