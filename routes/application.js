const indexRouter = require('./routes/index');
const authRoute = require('./routes/authRoute');
const tripsRouter = require('./routes/trips');  //Import routes for "trips" area of site

app.use('/', indexRouter);
app.use('/users', authRoute);
app.use('/trips', tripsRouter);  // Add trips routes to middleware chain.