import path from 'path';
import express from 'express';
import ErrorHandlerMiddleware from './middleware/error.js';
import contact from './routes/contactRoutes.js'
import { fileURLToPath } from 'url';
// import fileUpload from 'express-fileupload';
const app=express();
// app.use(fileUpload())
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));
app.use('/api/v1',contact);
// after all API routes:
const __filename=fileURLToPath(import.meta.url);

const __dirname= path.dirname(__filename);
app.use(express.static((path.join(__dirname,'../dist'))));
// console.log(path.join(__dirname,'../dist/index.html'))

// app.get('/*',(_req,res)=>{
//     res.sendFile(path.join(__dirname,'../dist','index.html'));
// })
// console.log(__dirname)
// app.get('/^\/(?!api\/).*/', (_req, res) => {
//   res.sendFile(path.resolve(__dirname, '../dist','index.html'));
// });
app.use((_req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});



app.use(ErrorHandlerMiddleware)
export default app;