// function loadUserReviews() {
//   let reviews = [];
//   const userReviews = localStorage.getItem('review');
//   if (userReviews) {
//     reviews = JSON.parse(userReviews);
//   }
// }

setInterval(() => {
  let reviews = [];
  const userReviews = localStorage.getItem('review');
  if (userReviews) {
    reviews = JSON.parse(userReviews);
  }
}, 5000);