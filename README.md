# fuel-database

in this branch the update is from Austins recent push to the master from 7.24.2020. my issue with mysql was that mysql wasn't refreshing the data table. after i droped the data then i was able to see the different tables for user and fuel. 

# changes

-- in index.handlebars our route was "/signup" and when i tried to sign up i got the 404, once changed to "signup" i was directed to the two button page. 
<div class="container"> <form id="signup" name="signup" method="post" action="signup">
  
-- added nodemon server.js in config so wont have to refreach each time  
- the show password wasn't working so i added a signin.js in public directory to enable it and linked in main.handlebars

- css logo and footer
  
# possible need  
- need some type of authentication, welsey suggested https://www.npmjs.com/package/passport-jwt
-- tried to get passport to work but ran out of time. going to write notes on how to help though
- need a post route, to get user to submit data.
- need a connection bwt fuel and user. 
- need a route for parameter, authetication. 

# dotenv update
- the reason .env didn't work the first time is because we are using sequelize and the way that wesley described was not using sql, i'd have to rewrite the code we have for .env to work to protect the passwords.  

## working on
- need a button to route the user from the view data page to the main page after inserting data
