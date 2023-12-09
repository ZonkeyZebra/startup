import React from "react";
import './restaurants.css';

export function CrownBurger(props) {
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
            if ("Crown Burger" === review.restaurant) {
            theirReviews.push(
                <div className="review" key={i}>
                <p className="restaurant">{review.restaurant}</p>
                <p><span className="user-rate">User:</span> {review.name}</p>
                <p><span className="user-rate">Rating:</span> {review.rating}</p>
                <p className="review-text">{review.comment}</p>
                <p><span className="location">Location:</span> {review.location}</p>
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
            <h1>Crown Burger</h1>
            <div>{theirReviews}</div>
        </main>
    )
}