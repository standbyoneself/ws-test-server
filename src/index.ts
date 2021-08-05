import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './router';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: 'GET',
    credentials: true,
  })
);
app.use('/api', router);

const server = app.listen(PORT, () => {
  console.log(`Server is running on the ${PORT} port!`);
});

server.on('error', (error) => console.log(error));
