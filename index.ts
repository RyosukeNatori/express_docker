import express from 'express'
const app: express.Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req:express.Request, res: express.Response) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});