import React from 'react';


const ReviewCard = ({ review }) => {
  const t = new Date(review.createdAt);

  return (
    <div className='col s12'>
      <li className='collection-item avatar'>
        <i className='material-icons circle'>mode_edit</i>
        <span className='title'> {review && review.reviewTitle}</span>
        <p>{review && review.reviewDesc}</p>
        <p>
          Review by {review && review.username}
        </p>
        <p>
          Review to {review && review.product_name}
        </p>
        <p>
          Reviewed on {t.toString()}
        </p>
        <a href='#!' className='secondary-content'>
          {review && review.rating}
          <i className='material-icons'>grade</i>
        </a>
      </li>
    </div>
  );
};

export default (ReviewCard);
