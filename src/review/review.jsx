import React, { useState } from "react";

export function Review(props) {
    const [userName, setUserName] = React.useState(props.userName);
    const [restaurant, setRestaurant] = React.useState("");
    const [rating, setRating] = React.useState("");
    const [comment, setComment] = React.useState("");
    const [location, setLocation] = React.useState("");
    const date = new Date().toLocaleDateString();
    const [allReviews, setAllReviews] = React.useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newReview = {name: userName, restaurant: restaurant, rating: rating, comment: comment, location: location, date: date};

        try {
            const response = await fetch('/api/review', {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(newReview),
            });

            const reviews = await response.json();
            localStorage.setItem('reviews', JSON.stringify(reviews));

        }catch {
                // If there was an error then just track locally
                const updatedReviews = [...allReviews, newReview];
                setAllReviews(updatedReviews);
                localStorage.setItem("allReviews", JSON.stringify(updatedReviews));
        }
        //clears out the form after it's been submitted
        document.getElementById("reviewForm").reset();
    }


    return (
        <main className="container-fluid bg-light text-dark text-center">
            <form id="reviewForm">
                <select className="form-select" aria-label="Default select example" id="selectRestaurant" onChange={(e) => setRestaurant(e.target.value)}>
                    <option hidden value="">Restaurant</option>
                    <option value="Arby's">Arby's</option>
                    <option value="Cafe Rio">Cafe Rio</option>
                    <option value="Cancun Cafe">Cancun Cafe</option>
                    <option value="Chick-Fil-A">Chick-Fil-A</option>
                    <option value="Costa Vida">Costa Vida</option>
                    <option value="Crown Burger">Crown Burger</option>
                    <option value="Domino's">Domino's</option>
                    <option value="Jamba Juice">Jamba Juice</option>
                    <option value="Jersey Mike's">Jersey Mike's</option>
                    <option value="J-Dawgs">J-Dawgs</option>
                    <option value="Little Caesars">Little Caesars</option>
                    <option value="Maria's">Maria's</option>
                    <option value="McDonalds">McDonalds</option>
                    <option value="R & R BBQ">R & R BBQ</option>
                    <option value="Raisin' Canes">Raisin' Caines</option>
                    <option value="Red 8 Bistro">Red 8 Bistro</option>
                    <option value="Subway">Subway</option>
                    <option value="Tropical Smoothie Cafe">Tropical Smoothie Cafe</option>
                    <option value="Wendy's">Wendy's</option>
                    <option value="Zupas">Zupas</option>
                </select>
                <p></p>
                <select className="form-select" aria-label="Default select example" id="selectRating" onChange={(e) => setRating(e.target.value)}>
                    <option hidden value="">Your Rating</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                </select>
                <p></p>
                <textarea name="comments" rows={2} cols={30} placeholder="Comments" onChange={(e) => setComment(e.target.value)} />
                <p></p>
                <textarea name="comments" rows={1} cols={30} placeholder="Location" onChange={(e) => setLocation(e.target.value)} />
                <p></p>
                <button type="button" className="btn btn-success" onClick={handleSubmit}>Submit</button>
              </form>
              <div className="live-review-updates"></div>
        </main>
    )
}

//*******************************************************OLD JS BELOW ********************************************************
//   //gets a users username they logged in with
//   function getUserName() {
//     return localStorage.getItem('userName');
//   }

//   let allReviews = [];
//   const ReviewEvent = 'reviewLeft';
//   const userName = this.getUserName();

//   //gets the values inputted from the form and saves them to local storage
//   async function saveReview() {
    
//     const restaurantEl = document.querySelector("#selectRestaurant");
//     localStorage.setItem("restaurant", restaurantEl.value);
//     console.log(restaurantEl);

//     const ratingEl = document.querySelector("#selectRating");
//     localStorage.setItem("rating", ratingEl.value);

//     const commentEl = document.querySelector("#leaveComment");
//     localStorage.setItem("comment", commentEl.value);

//     const locationEl = document.querySelector("#leaveLocation");
//     localStorage.setItem("location", locationEl.value);

//     const date = new Date().toLocaleDateString();
    
//     const review = [userName, localStorage.getItem("restaurant"), localStorage.getItem("rating"), localStorage.getItem("comment"), localStorage.getItem("location"), date];
//     const newReview = {name: userName, restaurant: restaurantEl.value, rating: ratingEl.value, comment: commentEl.value, location: locationEl.value, date: date}
//     console.log(review);
//     console.log("object review");
//     console.log(newReview)
//     try {
//       const response = await fetch('/api/review', {
//         method: 'POST',
//         headers: {'content-type': 'application/json'},
//         //body: JSON.stringify(review),
//         body: JSON.stringify(newReview),
//     });
//     console.log("response below");
//     console.log(response);
    
//     // Store what the service gave us
//     const reviews = await response.json();
//     console.log(reviews);
//     console.log(JSON.stringify(reviews));
//     localStorage.setItem('reviews', JSON.stringify(reviews));

//     // Let other user know a review has been left
//     this.broadcastEvent(userName, ReviewEvent);
//   } catch {
//     // If there was an error then just track locally
//     allReviews = allReviews.concat(review);
//     localStorage.setItem("allReviews", allReviews);
//   }
//   //clears out the form after it's been submitted
//   document.getElementById("reviewForm").reset();
//   }

//   //actual WebSocket live updates
//   function configureWebSocket() {
//     const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
//     this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
//     this.socket.onopen = (event) => {
//       this.displayMsg('Live Updates', 'connected');
//     };
//     this.socket.onclose = (event) => {
//       this.displayMsg('Live Updates', 'disconnected');
//     };
//     this.socket.onmessage = async (event) => {
//       const msg = JSON.parse(await event.data.text());
//       if (msg.type === ReviewEvent) {
//         this.displayMsg(msg.from, `left a review!`);
//       } else () => {
//         this.displayMsg(msg.from, `is here to review!`);
//       }
//     };
//   }

//   function displayMsg(from, msg) {
//     const chatText = document.querySelector('.live-review-updates');
//     chatText.innerHTML =
//       `<p>${from} ${msg}</p>` + chatText.innerHTML;
//   }

//   function broadcastEvent(from, type) {
//     const event = {
//       from: from,
//       type: type,
//     };
//     this.socket.send(JSON.stringify(event));
//   }

//   configureWebSocket();