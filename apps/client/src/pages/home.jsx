import { useEffect, useState } from 'react';
import reactLogo from '../assets/react.svg';

export default function Home() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        getName();
    }, []);

    const getName = async () => {
        const response = await fetch('http://localhost:3000/api/get-my-name');
        const data = await response.json();
        setName(data.name);
    };

    return (
        <>
            <div>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Name Is: <code>{name}</code>
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}