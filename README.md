## What this project is about 
This is a node js project with mongoDB database in which **Backend** and **Frontend** both are mingle. Through my code you will get a 
Frontend through which one can manage and manulplate the backend data **( CRUD )**.

## Technologies Used
- [NodeJS](https://nodejs.org/en/docs/) (**open source server environment**)
- [ExpreJS](https://expressjs.com/) (**Fast, unopinionated, minimalist web framework for node**)
- [MongoDB](https://docs.mongodb.com/) (**Database**)
- HTML (**Initially frontend pages designed in HTML**)
- [EJS](https://ejs.co/)  (**.HTML files are converted into .ejs file**)

## Node Package Used (**NPM**)
Before you start coding you have to install some Node Package Modules.
1. [**Express**](https://www.npmjs.com/package/express)
   - Express is used for create RESTful API's.
   - Rendering of pages with particular functionalities.
2. [**ejs**](https://www.npmjs.com/package/ejs)
   - ejs file is used in place of html files because it is easy to inject data into HTML template at the client side and produce the final HTML.
   - It also helps to embed JavaScript to HTML pages.
3. [**body-parser**](https://www.npmjs.com/package/body-parser)
   - To handle HTTP POST request in Express.js, you need to install middleware module  which is body-parser.
   - Body-parser extract the entire body portion of an incoming request stream and exposes it on req.body.
   - This body-parser module parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request.
4. [**sha256**](https://www.npmjs.com/package/sha256)
   - Secure Hash Algorithm – 256 bit and is a type of hash function to create highly protected digests/hash values.Main reason for using a set of crytographic hash functions is to create a strong and secured algorithm.
   - sha-256 is used to authenticate the user password which a user enters it at the time of registration
5. [**mongodb**](https://www.npmjs.com/package/mongodb)
   - If you want to use properties provied in mongoDB you have to install this Node Package.
6. [**cookie-parser**](https://www.npmjs.com/package/cookie-parser)
   - If you want to store any data in cookies with Express, we will require the cookie-parser.
   - I use cookie-parser to store a unique-ID through which i am confirming that a user is logged in or logged out.
7. [**multer**](https://www.npmjs.com/package/multer)
   - When a web client uploads a file to a server, it is generally submitted through a form and encoded as multipart/form-data. Multer is middleware for Express and Node.js that makes it easy to handle this multipart/form-data when your users upload files.
   
**I think i have completed all the NPM modules which are used in this project. If you want to know how i used these module to execute different functionalaties go through my code**
   
