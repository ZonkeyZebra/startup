# startup
My start up project for my CS 260 class.
# Pick Your Plate

### Elevator Pitch
One of the few things humans universally love is food. But not all food is created equal. With this application you can now find out all the best places to go and grab a bite to eat! You can see what people are saying about various restaraunt franchises and locations and leave your own review and rating as well!
### Design
![Startup login image](/Images/Startup%20-%20Login.jpg)
![Startup image of main page](/Images/Startup%20-%20Main.jpg)
![Startup image of page to leave review](/Images/Startup%20-%20Review.jpg)
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
- **Images** - There is a logo image for the site, and placeholder images for restaurant logos and a food picture on the About page.
- **Login** - Input box and submit button for login.
- **Database** - The placeholder reviews represent data stored.
- **WebSocket** - There are updates of people reviewing places that shows up towards the bottom of the Search page, so people can see new reviews in real time.