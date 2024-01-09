import React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const AdminBurgerMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton color="inherit" onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem component={Link} to="/admin/books" onClick={handleClose}>
          Управление книгами
        </MenuItem>
        <MenuItem component={Link} to="/admin/admins" onClick={handleClose}>
          Администраторы
        </MenuItem>
        <MenuItem component={Link} to="/admin/users" onClick={handleClose}>
          Управление пользователями
        </MenuItem>
      </Menu>
    </div>
  );
};

export default AdminBurgerMenu;