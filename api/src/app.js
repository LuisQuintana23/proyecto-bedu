import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes/index.js';


const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(cors());
// convertir a json
app.use(express.json());
app.use("/", routes);

export default app




