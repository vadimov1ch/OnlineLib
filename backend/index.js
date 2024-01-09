import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import { UserController, BookController, ReviewController } from './controllers/index.js';
import { checkAuth, checkIsAdmin, handleValidationErrors } from './utils/index.js';
import { 
    loginValidation, 
    registerValidation, 
    bookUpdateValidation, 
    bookCreateValidation, 
    reviewCreateValidation, 
    reviewUpdateValidation, 
 } from './utils/validations.js';

mongoose
.connect('mongodb+srv://admin:admin123@devcluster.vmaf44v.mongodb.net/LibOnline?retryWrites=true&w=majority')
.then(() => console.log('DataBase is OK'))
.catch((err) => console.log('DataBase error', err));

const app = express();
app.use(express.json());
app.use(cors()); 

// User.js HTTP requests:
app.post('/auth/register', registerValidation, handleValidationErrors, UserController.register);
app.post('/auth/adminregister', registerValidation, handleValidationErrors, UserController.registerAsAdmin);
app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login);
app.get('/users', UserController.getAllUsers);
app.get('/admins', UserController.getAllAdmins);
app.delete('/users/:id', UserController.deleteUserById);

// Book.js HTTP requests:
app.get('/books', BookController.getAll);
app.get('/books/:id', BookController.getOne);
app.get('/search/:title', BookController.searchBooks);
app.post('/books', checkAuth, checkIsAdmin, bookCreateValidation, handleValidationErrors, BookController.create);
app.delete('/books/:id', checkAuth, checkIsAdmin, BookController.remove);
app.patch('/books/:id', checkAuth, checkIsAdmin, bookUpdateValidation, handleValidationErrors, BookController.update);

// Review.js HTTP requests:
app.get('/reviews/:bookId', ReviewController.getAll);
app.post('/books/:id/reviews', checkAuth, reviewCreateValidation, handleValidationErrors, ReviewController.create);
app.delete('/reviews/:id', checkAuth, ReviewController.remove);
app.patch('/reviews/:id', checkAuth, reviewUpdateValidation, handleValidationErrors, ReviewController.update);

app.listen(5000, (err) => {
    if (err) {
      return console.log(err);
    }
  
    console.log('Server is OK');
});