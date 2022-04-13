This is an edit on the original project.
I'm currently struggling to get the code to properly function
I'm using nodemon to automatically restart the server whenever I update anything.

As far as I know you need to run the server before you can access the web pages. So far I can't get it to work properly.

--Changes include--
Conversion of html files to ejs
Added Express to pack.json dependencies
Added app.js to hold Express code
Added to app.js the necessary code to create express server (I think) and the ejs view engine
Added nav.ejs as a partial template to hold the repetitive html code for the navigation bar (Stops repetitive maintenance/updates to every page, also simplifies html code)
Added <%- include('./partial Templates/nav.ejs') %> to every web page to include the nav.ejs to every page (if changes occur to nav.ejs or css related to file all pages show the same change)
Fixed css file not being accessed properly by adding a dot at the beginning of the href="./css/main.min.css"  (located at the top in the head tag)
Fixed css on the navigation being inconsistent with the colors on every web page

--What needs to be fixed/addressed--
Figure out a way to properly view the web pages via the app.js Express server (Routing)
Figure out if ejs is working or not
Add necessary meta tags, title tag, and other content that should be at the top of the web pages
Fix the font color on the sign up section on the index page (too dark, difficult to see)
Test pages to see if the content is being properly retrieved from server (app.js)
Test pages to see if the content using ejs is properly displaying the navigation bar
