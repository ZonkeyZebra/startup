  /*getUserName() {
    return localStorage.getItem('userName') ?? 'Mystery player';
  }

  saveReview(review) {
    const userName = this.getUserName();
    let review = [];
    const reviewText = localStorage.getItem('review');
    if (reviewText) {
      review = JSON.parse(reviewText);
    }
    review = this.updateScores(userName, score, scores);

    localStorage.setItem('scores', JSON.stringify(scores));
  }

  updateReview(userName, score, scores) {
    const date = new Date().toLocaleDateString();
    const newScore = { name: userName, score: score, date: date };

    let found = false;
    for (const [i, prevScore] of scores.entries()) {
      if (score > prevScore.score) {
        scores.splice(i, 0, newScore);
        found = true;
        break;
      }
    }*/
  
  function delay(milliseconds) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, milliseconds);
    });
  }
  
  setInterval(() => {
    const score = Math.floor(Math.random() * 3000);
    const chatText = document.querySelector('#user-messages');
    chatText.innerHTML =
      `<div class="live-review-updates"><p>User300 revcently left a review!` + chatText.innerHTML;
  }, 5000);