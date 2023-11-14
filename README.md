# startup
My start up project for my CS 260 class.
# Pick Your Plate

### Elevator Pitch
One of the few things humans universally love is food. But not all food is created equal. With this application you can now find out all the best places to go and grab a bite to eat! You can see what people are saying about various restaraunt franchises and locations and leave your own review and rating as well!
### Design
![Startup login image](/public/Images/Startup%20-%20Login.jpg)
![Startup image of main page](/public/Images/Startup%20-%20Main.jpg)
![Startup image of page to leave review](/public/Images/Startup%20-%20Review.jpg)
### Key Features
- Authentication via secure login over HTTPS.
- Leave a rating and review on restaurants.
- Shows the rating and reviews of other users.
- Rating and reviews are stored onto a database.
- Choice display of restaurant.
- Search for restaurant to review.
- See location associated with the review.

### Technologies
- `HTML` - Uses HTML to structure the application. Has hyperlinks for choice artifacts. Has 4 HTML pages.
- `CSS` - Styles the application to make a beautiful and satisfying restaurant reviewing experience.
- `Javascript` - Provides login, choice display, rating functions, etc.
- `Service` - Background sercive with endpoints for login, retrieving reviews, and submitting reviews.
- `DB` - Stores users, ratings, and reviews in a database.
- `Login` - Register and login users with credentials stored in a secure database.  Users can't leave reviews unless they have been authenticated.
- `WebSocket` - Other reviews and rating will be broadcast to other users.
- `React` - Web page ported to use the React web framework.

## HTML Deliverable

For this deliverable I built out the structure of my application using HTML.

- **HTML pages** - Four HTML page that represent the ability to login, an about page, the ability to search for restaurants to review, and see your own reviews.
- **Links** - The login page automatically links to the seach page. There are nav links on all the pages.
- **Text** - There is text on all the pages that are stand in for the text a user would see when looking at reviews, the login, and About page.
- **Third-Party Calls** - Restaurants found using a search on a location have been hardcoded as a placeholder. The food picture on the about page will be randomly generated.
- **Images** - There is a logo image for the site, and placeholder images for restaurant logos and a food picture on the About page.
- **Login** - Input box and submit button for login.
- **Database** - The placeholder reviews represent data stored.
- **WebSocket** - There are updates of people reviewing places that shows up towards the bottom of the Search page, so people can see new reviews in real time.

## CSS deliverable

For this deliverable I properly styled the application into its final appearance.

- **Header, footer, and main content body**
- **Navigation elements** - Got rid of underlines and made a navigation bar at the top of the screen.
- **Responsive to window resizing** - Responsive design has been added to make the content look good on any size screen.
- **Application elements** - Good colors and use of whitespace.
- **Application text content** - Consistent fonts, colors, and design.
- **Application images** - Images are placed well and look good on any screen.

## JavaScript deliverable

For this deliverable I implemented by JavaScript so that the application works for a single user. I also added placeholders for future technology.

- **Login** - When you press enter or the login button it takes you to the review page.
- **Database** - Stores a review into local storage and allows you to see that review on relevant pages. Currently can only have one review, since it is using local storage, but this will be improved later on in the DB deliverable.
- **WebSocket** - I used the setInterval function to periodically send out a message that a random user has left a review. This will be replaced with WebSocket messages later.
- **Application Logic** - Takes data from a form and allows it to be shown on other parts of the site. Uses logic to decide whether or not that review should be shown on that page or not.

## Service deliverable

For this deliverable I added backend endpoints that receives reviews and returns reviews.

- **Create an HTTP service using Node.js and Express** - This has been added!
- **Frontend served up using express static middleware** - This has been added!
- **Your frontend calls third party service endpoints** - Uses Foodish to give a random image on about page.
- **Your backend provides service endpoints** - Endpoints for POSTing and GETing reviews.
- **Your frontend calls your service endpoints** - Calls created endpoints for reviews.

## DB deliverable

For this deliverable I stored reviews in the database.

- **MongoDB Atlas database created** - This has been added!
- **Endpoints for data** - My stubbed out endpoints now processes reviews and sends them to Mongo for storage.
- **Stores data in MongoDB** - This has been added!