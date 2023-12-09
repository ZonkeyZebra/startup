import React from "react";

export function YourReviews(props) {
    return (
        <main className="container-fluid bg-light text-dark text-center">
            <h3>{props.userName}'s Recent Reviews:</h3>
            <div class="your-reviews"></div>
        </main>
    )
}

// ************************************ OLD JS BELOW *********************************************
// function getUserName() {
//     return localStorage.getItem('userName');
//   }
  
//   async function loadReviews() {
//     //let reviews = [];
//     let reviews = {};
//     console.log("loadingReviews");
//     console.log(fetch('/api/reviews'));
//     console.log((await fetch('/api/reviews')).json());
//     try {
//       // Get the latest reviews from the service
//       const response = await fetch('/api/reviews');
//       reviews = await response.json();
//       console.log("response below");
//       console.log(response);
//       console.log(reviews);
//       console.log(JSON.stringify(reviews));
//       console.log(reviews.name);
//       console.log(reviews[0]);
//       console.log(reviews[0].name);
//       console.log(reviews.length);
  
//       // Save the reviews in case we go offline in the future
//       localStorage.setItem('reviews', JSON.stringify(reviews));
//     } catch {
//       // If there was an error then just use the last saved reviews
//       const reviewsText = localStorage.getItem('reviews');
//       if (reviewsText) {
//         reviews = JSON.parse(reviewsText);
//       }
//       console.log(reviews);
//     }
  
//     displayUserReviews(reviews);
//   }
  
//   function displayUserReviews(reviews) {
//     const currentUser = this.getUserName();
//     for (let i = 0; i < reviews.length; i++) {
//       if (reviews[i].name === currentUser) {
//         const theirReviews = document.createElement("section");
//         theirReviews.innerHTML = `<h6>${reviews[i].name}'s Reviews:</h6>
//           <div class="review">
//           <p class="restaurant" style="text-decoration: underline;">${reviews[i].restaurant}</p>
//           <p class="user-rate">Your Rating: <span class="result">${reviews[i].rating}</span></p>
//           <p class="review-text">${reviews[i].comment}</p>
//           <p class="location">Location of review: <span class="result">${reviews[i].location}</span></p>
//           <p class="date">${reviews[i].date}</p>`;
//         document.querySelector('.your-reviews').appendChild(theirReviews);
//         console.log("displaying reviews");
//         console.log(reviews);
//       }
//     }
//   }