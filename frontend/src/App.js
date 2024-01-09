import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Footer from './components/Markup/Footer';
import Header from './components/Markup/Header';
import LoginPage from './components/Auth/LoginPage';
import RegisterPage from './components/Auth/RegisterPage';
import HomePage from './components/Basic/HomePage';
import FaqPage from './components/Basic/FaqPage';
import AboutUsPage from './components/Basic/AboutUsPage';
import BooksPage from './components/Basic/BooksPage';
import BookDetailPage from './components/Basic/BookDetailPage';
import AddBookPage from './components/Admin/AddBookPage';
import EditBookPage from './components/Admin/EditBookPage';
import AdminBooksPage from './components/Admin/AdminBooksPage';
import AdminRegisterPage from './components/Auth/AdminRegisterPage';
import AdminAdminsPage from './components/Admin/AdminAdminsPage';
import AdminUsersPage from './components/Admin/AdminUsersPage';
import NotFoundPage from './components/Basic/NotFoundPage';

return (
  <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/adminregister" element={<AdminRegisterPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/books" element={<BooksPage />} />
      <Route path="/admin/users" element={<AdminUsersPage />} />
      <Route path="/books/:bookId" element={<BookDetailPage />} />
      <Route path="/admin/add-book" element={<AddBookPage />} />
      <Route path="/admin/edit-book/:id" element={<EditBookPage />} />
      <Route path="/admin/books" element={<AdminBooksPage />} />
      <Route path="/admin/users" element={<AdminUsersPage />} />
      <Route path="/admin/admins" element={<AdminAdminsPage />} />
    </Routes>
    <Footer />
  </div>
);
}

export default App;
