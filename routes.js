module.exports = function(app){

    const application = require('./routes/application');
    const authRoute = require('./routes/auth-route');
    const trips = require('./routes/trips');

    app.use('/', application);
    app.use('/auth-route', authRoute);
    app.use('/trips', trips);

//other routes..going to change trips to fuel or something else
}
