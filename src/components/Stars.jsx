import React from "react";

export default function Stars({rating}) {
    
    const renderStars = () => {
        const decimal = rating - Math.floor(rating);
        let roundedRating = 0
        if (decimal >= 0.75) {
            roundedRating = Math.ceil(rating);
        } else if (decimal >= 0.50) {
            roundedRating = Math.floor(rating) + 0.5;
        } else {
            roundedRating = Math.floor(rating);
        }
        const fullStars = Math.floor(roundedRating);
        const hasHalfStar = (roundedRating - fullStars) >= 0.5;

        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars.push(<i key={i} className="fas fa-star"></i>);
            } else if (i === fullStars + 1 && hasHalfStar) {
                stars.push(<i key={i} className="fas fa-star-half-alt"></i>);
            } else {
                stars.push(<i key={i} className="far fa-star"></i>);
            }
        }
        
        return stars;
    };

    return renderStars()
}