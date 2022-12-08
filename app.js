import express from 'express';

const app = express();
const PORT = 3000;
// ИЗМЕНИТЕ ТЕКСТ В res.send()
app.get('/', (req, res) => {
    res.send('Hello. I changed this text')
})
app.listen(PORT, () => console.log(`My server is running on port ${PORT}`))