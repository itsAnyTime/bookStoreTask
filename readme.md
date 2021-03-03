  Your clients are bookstore owners who want to display their book collection on the main page of their store.  For each book, they want to display author, title, year of publication, and price.  They also want to be able to add new books to their collection. Your task is to create a REST API for the store using Express.
  1. In your project’s root directory, create directories called “controller”, “data”, “public”, and “routes”.
  2. In the “public” directory, create a simple index.html file with an h1.
  3. Using what you have learned about Express routing, create endpoints for ‘/’, ‘/users’, and ‘/books’, putting the routers in the “routes” directory. For now, just make sure that the routes work by having them respond to requests with strings.
  4. Set up a mock database for the bookstore using lowdb, putting the db.json file in the data directory.
  5. Create a request listener “getBooks” for GET requests to the ‘/books’ route and a request listener “addBook” for POST requests to the ‘/books’ route. The getbooks function should send the complete books array to the client, the addBook function should add a book to the books array.
BONUS: the addBook function should give each book it adds an ID property whose value is the date the book is added.  Define these functions in controller.js, a file you put in the controller directory.





Bookstore - Part 2
In your project’s root directory, create a middleware directory.  In this middleware directory, create a file security.js.  In this file, declare a middleware function setCors that enables CORS for each kind of HTTP request. Use setCors in app.js.