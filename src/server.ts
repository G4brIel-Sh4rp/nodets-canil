import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import {resolve} from 'path';
import mainRoutes from './routes/index';
import {notFound} from './middlewares/mainMiddlewares';

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', resolve(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(resolve(__dirname, '..', 'public')));

server.use(mainRoutes);
server.use(notFound);

server.listen(process.env.PORT, ()=>{
    console.log(`Rodando em http://localhost:${process.env.PORT}`);
});
