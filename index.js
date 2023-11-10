const express = require('express');
const app = express();

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// GetReviews
apiRouter.get('/reviews', (_req, res) => {
  res.send(reviews);
});

// SubmitReview
// apiRouter.post('/review', async (req, res) => {
//   reviews = await allReviews(req.body, reviews);
//   res.send(reviews);
// });
apiRouter.post('/review', (req, res) => {
  reviews = req.body;
  res.send(reviews);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

let reviews = {};
// let reviews = [];
// async function allReviews(newReview, reviews) {
//   reviews = reviews.concat(newReview);
//   return reviews;
// }