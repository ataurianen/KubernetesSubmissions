import {useEffect, useState} from 'react'


function App() {
    const [randomString, setRandomString] = useState('');
    const [messages, setMessages] = useState<string[]>([]);

    const generateRandomString = (length: number) => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    useEffect(() => {
        setRandomString(generateRandomString(10));
    }, [])
    useEffect(() => {
        if (!randomString) {
            return;
        }

        const intervalID = setInterval(() => {
            const timestamp = new Date().toISOString();
            const newMessage = `${timestamp}: ${randomString}`;

            setMessages(messages => [...messages, newMessage]);
        }, 5000);

        return () => clearInterval(intervalID);
    });


    return (
        <div>
            <h1>Random String: {randomString}</h1>
            <h2>Messages:</h2>
            <ul>
                {messages.length > 0 ? (
                    messages.slice(-5).map((msg, index) => {
                        const displayIndex = Math.max(0, messages.length - 5) + index;
                        return (
                            <p key={displayIndex}>
                                <span>{`[${displayIndex + 1}]`}</span>
                                {msg}
                            </p>
                        )
                    })
                ) : (
                    <p>No messages yet.</p>
                )}
            </ul>
        </div>
    )
        ;
}

export default App;
