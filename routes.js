module.exports = function(app){

    const application = require('./routes/application');
    const authRoute = require('./routes/authRoute');
    const trips = require('./routes/trips');

    app.use('/', application);
    app.use('/authRoute', authRoute);
    app.use('/trips', trips);

//other routes..
}