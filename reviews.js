  //gets a users username they logged in with
  function getUserName() {
    return localStorage.getItem('userName');
  }

  //gets the values inputted from the form and saves them to local storage
  function submitReview() {
    console.log("Hello?");
    const userName = this.getUserName();
    const restaurantEl = document.querySelector("#selectRestaurant");
    localStorage.setItem("restaurant", restaurantEl.value);
    console.log(restaurantEl);

    const ratingEl = document.querySelector("#selectRating");
    localStorage.setItem("rating", ratingEl.value);

    const commentEl = document.querySelector("#leaveComment");
    localStorage.setItem("comment", commentEl.value);

    const locationEl = document.querySelector("#leaveLocation");
    localStorage.setItem("location", locationEl.value);

    const date = new Date().toLocaleDateString();
    
    const review = [userName, localStorage.getItem("restaurant"), localStorage.getItem("rating"), localStorage.getItem("comment"), localStorage.getItem("location"), date];
    const lengthOfArray = review.length;
    console.log(review);
    console.log(lengthOfArray);
    localStorage.setItem("review", review);
    //clears out the form after it's been submitted
    document.getElementById("reviewForm").reset();
  }

  //simulates the live text feature
  setInterval(() => {
    const userNumber = Math.floor(Math.random() * 900);
    const liveText = document.querySelector('.live-review-updates');
      liveText.innerHTML = `<p>User${userNumber} recently left a review!</p>` + liveText.innerHTML;
  }, 5000);