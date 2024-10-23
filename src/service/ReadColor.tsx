import { useEffect, useState } from 'react';
import { ReadUserProps } from '../types/ReadUserPropsType';

const ReadColor: React.FC<ReadUserProps> = ({ setColors }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchMovieHandler = async () => {
        setIsLoading(true);
        setError(null);
        const link = process.env.REACT_APP_API_LINK
        try {
            const response = await fetch(`${link}\colors.json`);
            console.log(response)
            if (!response.ok) {
                throw new Error('Valami hiba van!');
            }
            const data = await response.json();
            const loadedColors: any[] = [];

            for (const key in data) {
                const item = data[key];

                if (item.color || item.secundColor) {
                    loadedColors.push({
                        color: item.color?.trim() || ''
                    });
                }
            }
            setColors(loadedColors);
        } catch (error: any) {
            setError(error.message);
            console.log(error, "color error")
        }
        setIsLoading(false);
        console.log(!isLoading, "color finish loaded")
    };

    useEffect(() => {
        fetchMovieHandler();
    }, []);

    return <>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Error in colors</h1>}
    </>;
};

export default ReadColor;