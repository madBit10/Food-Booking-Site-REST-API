import express from 'express';
import { config } from 'dotenv';
import connectDB from './db.js';
import userRouter from './routes/users.js';
import authRouter from './routes/auth.js';
import resRouter from './routes/restuarants.js';
import orderRouter from './routes/orders.js';

config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); 
app.use('/foodapi', userRouter);
app.use('/foodapi', authRouter);
app.use('/foodapi', resRouter);
app.use('/foodapi', orderRouter);


app.listen(PORT, () => console.log(`The server is listening on port ${PORT}`));