import express, { Router } from 'express';
import cors from 'cors'
import router from './api/postsRouter.js';


const app = express();

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// пример роутинга
app.use('/posts', router)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('server is up on port', PORT);
})
