var indexRouter = require('./routes/index');
var auth-routeRouter = require('./routes/auth-route');
var tripsRouter = require('./routes/trips');  //Import routes for "trips" area of site

app.use('/', indexRouter);
app.use('/users', auth-routeRoute);
app.use('/trips', tripsRouter);  // Add trips routes to middleware chain.