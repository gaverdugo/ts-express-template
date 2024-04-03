import express from 'express';
import helmet from "helmet";
import { errorHandler, notFound } from './middleware/errors';

const app = express();

app.use(helmet());
app.use(express.json());

app.get("/", (_req, res) => {
    res.json({
        "message": "✨Hi there✨"
    })
})

app.use(notFound);
app.use(errorHandler);

export default app;