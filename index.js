import express from 'express';
import FileUpload from 'express-fileupload';
import cors from 'cors';
import productRoute from './routes/productRoute.js';

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static('public'));//used for access file with browser
app.use(productRoute);

app.listen(5000, ()=> console.log('Server ready masszzeehh ...'));