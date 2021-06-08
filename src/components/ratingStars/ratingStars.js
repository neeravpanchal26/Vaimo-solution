// Default imports
import React from 'react';

// Custom imports
import StarRatings from 'react-star-ratings';

const RatingStars = (props) => {
    return (
        <div>
            <StarRatings rating={parseInt(props.stars)} starRatedColor='#FF6600' numberOfStars={5} name='rating' starDimension='14px' starSpacing='2px'/>
        </div>
    )
};

// Default export
export default RatingStars;