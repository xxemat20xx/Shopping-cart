import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

const StarRating = ({ rating }) => {
    // Convert rating to nearest half
    const roundedRating = Math.round(rating * 2) / 2;
    const fullStars = Math.floor(roundedRating);
    const hasHalfStar = roundedRating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(roundedRating);

    return (
        <div className="flex items-center gap-1">
            {/* Full stars */}
            {[...Array(fullStars)].map((_, index) => (
                <FontAwesomeIcon 
                    key={`full-${index}`} 
                    icon={solidStar} 
                    className="text-yellow-400"
                />
            ))}

            {/* Half star */}
            {hasHalfStar && (
                <div className="relative">
                    <FontAwesomeIcon 
                        icon={solidStar} 
                        className="text-yellow-400 absolute w-[50%] overflow-hidden" 
                    />
                    <FontAwesomeIcon 
                        icon={regularStar} 
                        className="text-yellow-400" 
                    />
                </div>
            )}

            {/* Empty stars */}
            {[...Array(emptyStars)].map((_, index) => (
                <FontAwesomeIcon 
                    key={`empty-${index}`} 
                    icon={regularStar} 
                    className="text-yellow-400"
                />
            ))}
            
            <span className="ml-1 text-sm text-gray-600">({rating})</span>
        </div>
    );
};

export default StarRating; 