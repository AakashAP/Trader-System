import express from 'express';
import parser from 'body-parser';
import cors from 'cors';


const Server = express();

Server.use(cors());
Server.use(parser.json());

Service.listen(3000, () => {
    console.log(`Trader Server listening at http://localhost:3000`); })