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

function App() {
  const isLoggedIn = !!localStorage.getItem('authToken');
  const userRole = localStorage.getItem('userRole');

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
        {isLoggedIn && userRole === 'admin' ? (
          <Route path="/admin/add-book" element={<AddBookPage />} />
        ) : (
          <Route path="/not-found" element={<NotFoundPage />} />
        )}
        {isLoggedIn && userRole === 'admin' ? (
          <Route path="/admin/edit-book/:id" element={<EditBookPage />} />
        ) : (
          <Route path="/not-found" element={<NotFoundPage />} />
        )}
        {isLoggedIn && userRole === 'admin' ? (
          <Route path="/admin/books" element={<AdminBooksPage />} />
        ) : (
          <Route path="/not-found" element={<NotFoundPage />} />
        )}
        {isLoggedIn && userRole === 'admin' ? (
          <Route path="/admin/users" element={<AdminUsersPage />} />
        ) : (
          <Route path="/not-found" element={<NotFoundPage />} />
        )}
        {isLoggedIn && userRole === 'admin' ? (
          <Route path="/admin/admins" element={<AdminAdminsPage />} />
        ) : (
          <Route path="/not-found" element={<NotFoundPage />} />
        )}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
