function loadReviews() {
    let review = [];
    const reviewText = localStorage.getItem('review');
    if (reviewText) {
      review = JSON.parse(reviewText);
    }
  
    const reviewBoxEl = document.querySelector('#review');
  
    if (review.length) {
      for (const [i, review] of review.entries()) {
        const restaurantEl = document.createElement('p');
        const averageRateEl = document.createElement('p');
        const userRateEl = document.createElement('p');
        const reviewTextEl = document.createElement('p');
        const locationEl = document.createElement('p');
        const reviewDateEl = document.createElement('p');
  
        restaurantEl.textContent = review.restaurant;
        averageRateEl.textContent = review.average;
        userRateEl.textContent = review.rate;
        reviewTextEl.textContent = review.text;
        locationEl.textContent = review.location;
        reviewDateEl.textContent = review.date;
  
        const reviewBox = document.createElement('div');
        reviewBox.appendChild(restaurantEl);
        reviewBox.appendChild(averageRateEl);
        reviewBox.appendChild(userRateEl);
        reviewBox.appendChild(reviewTextEl);
        reviewBox.appendChild(locationEl);
        reviewBox.appendChild(reviewDateEl);
  
        reviewBoxEl.appendChild(reviewBox);
      }
    } else {
        reviewBoxEl.innerHTML = 'You have not left any reviews yet!';
        /*const nothingString = document.createElement('p');
  
        nothingString.textContent = 'You have not left any reviews yet!';
  
        const reviewBox = document.createElement('div');
        reviewBox.appendChild(nothingString);

        reviewBoxEl.appendChild(reviewBox);*/
    }
  }
  
  loadReviews();