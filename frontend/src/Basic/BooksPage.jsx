import React, { useState, useEffect } from 'react';
import StarIcon from '@mui/icons-material/Star';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CommentIcon from '@mui/icons-material/Comment';
import axios from 'axios';
import {
  InputBase,
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const BooksPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearchInputChange = async (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:5000/search/${searchText}`);
      if (response && response.data) {
        setBooks(response.data);
        setError(null);
      }
    } catch (error) {
      console.error('Error fetching books:', error);
      setError('Произошла ошибка при поиске книг. Пожалуйста, попробуйте еще раз.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/books');
        if (response && response.data) {
          setBooks(response.data);
        }
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '10px', marginBottom: '80px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <InputBase
              placeholder="Поиск книг..."
              value={searchText}
              onChange={handleSearchInputChange}
              onKeyPress={handleKeyPress}
              sx={{
                color: 'inherit',
                border: '1px solid #ccc',
                borderRadius: '5px',
                padding: '8px',
                width: '300px',
                marginRight: '10px',
              }}
            />
            <Button variant="contained" color="primary" onClick={handleSearch} disabled={loading}>
              {loading ? 'Загрузка...' : <SearchIcon />}
            </Button>
          </div>
      <div style={{ marginTop: '20px' }}>
        <Grid container spacing={3} justifyContent="center">
          {books.map((book) => (
            <Grid item key={book.id}>
              <Card
                sx={{
                  maxWidth: 300,
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                  },
                }}
              >
                <img
                  src={book.coverUrl || 'placeholder.jpg'} 
                  alt={book.title}
                  style={{ maxWidth: '100%', height: 'auto', maxHeight: '350px' }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ marginBottom: 1 }}>{book.title}</Typography>
                  <Typography variant="subtitle1" color="textSecondary" sx={{ marginBottom: 1 }}>
                    {book.author}
                  </Typography>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                  <span style={{ marginRight: '15px', display: 'flex', alignItems: 'center' }}>
                    <RemoveRedEyeIcon sx={{ color: 'blue', marginRight: '2px', fontSize: '1.5rem' }} />
                    {book.viewsCount}
                  </span>
                  <span style={{ marginRight: '15px', display: 'flex', alignItems: 'center' }}>
                    <CommentIcon sx={{ color: 'blue', marginRight: '2px', fontSize: '1.5rem' }} />
                    {book.totalReviews}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    <StarIcon sx={{ color: 'blue', marginRight: '2px', fontSize: '1.5rem' }} />
                    {book.averageRating !== undefined ? book.averageRating.toFixed(2) : 'Нет рейтинга'}
                  </span>
                </div>
                  <Link to={`/books/${book._id}`} style={{ textDecoration: 'none' }}>
                    <span style={{ color: 'blue' }}>ПОДРОБНЕЕ</span>
                  </Link>
                </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};
 
export default BooksPage;