import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

function generateRandomString(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

const randomString = generateRandomString(10);

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);

    setInterval(() => {
        const timestamp = new Date().toISOString();
        console.log(`${timestamp}: ${randomString}`);
    }, 5000);
});
