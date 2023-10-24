  //create object review
  //put into an array
  function getUserName() {
    return localStorage.getItem('userName');
  }

  function submitReview() {
    console.log("Hello?");
    const userName = this.getUserName();
    const restaurantEl = document.querySelector("#selectRestaurant");
    //localStorage.setItem("restaurant", restaurantEl.value);

    const ratingEl = document.querySelector("#selectRating");
    //localStorage.setItem("rating", ratingEl.value);

    const commentEl = document.querySelector("#leaveComment");
    //localStorage.setItem("comment", commentEl.value);

    const locationEl = document.querySelector("#leaveLocation");
    //localStorage.setItem("location", locationEl.value);

    const date = new Date().toLocaleDateString();
    
    const review = [userName, restaurantEl, ratingEl, commentEl, locationEl, date];
    console.log(review);
    localStorage.setItem("review", review);
  }

  setInterval(() => {
    const userNumber = Math.floor(Math.random() * 900);
    const liveText = document.querySelector('.live-review-updates');
      liveText.innerHTML = `<p>User${userNumber} recently left a review!</p>` + liveText.innerHTML;
  }, 5000);