import React from "react";
import './yourReviews.css';

export function YourReviews(props) {
    const [reviews, setReviews] = React.useState([]);

    // Demonstrates calling a service asynchronously so that
    // React can properly update state objects with the results.
    React.useEffect(() => {
        fetch('/api/reviews')
            .then((response) => response.json())
            .then((reviews) => {
                setReviews(reviews);
                localStorage.setItem('reviews', JSON.stringify(reviews));
            })
            .catch(() => {
                const reviewsText = localStorage.getItem('reviews');
                if (reviewsText) {
                    setReviews(JSON.parse(reviewsText));
                }
            });
    }, []);

    // Demonstrates rendering an array with React
    const theirReviews = [];

    if (reviews.length) {
        for (const [i, review] of reviews.entries()) {
            if (props.userName === review.name) {
            theirReviews.push(
                <div className="review" key={i}>
                <p className="restaurant">{review.restaurant}</p>
                <p className="user-rate">{review.rating}</p>
                <p className="review-text">{review.comment}</p>
                <p className="location">{review.location}</p>
                <p className="date">{review.date}</p>
                </div>
            );
            }
        }
    } else {
        theirReviews.push(
            <div key='0'>
                <p>Leave a review!</p>
            </div>
        );
    }


    return (
        <main className="container-fluid bg-light text-dark text-center">
            <h3>{props.userName}'s Recent Reviews:</h3>
            <div className="your-reviews">{theirReviews}</div>
        </main>
    )
}