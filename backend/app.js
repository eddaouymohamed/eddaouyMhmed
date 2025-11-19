import express from 'express';
import ErrorHandlerMiddleware from './middleware/error.js';
import contact from './routes/contactRoutes.js'


const app=express();
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));
app.use('/api/v1',contact);
app.use(ErrorHandlerMiddleware)
export default app;