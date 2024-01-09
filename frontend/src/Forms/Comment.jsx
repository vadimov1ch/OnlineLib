import React from 'react';

const Comment = ({ review }) => {
  return (
    <div>
      <h3>От: {review.user && review.user.username ? review.user.username : 'Нет информации'}</h3>
      <p>Рейтинг: {review.rating}</p>
      <p>{review.comment}</p>
    </div>
  );
};

export default Comment;