module.exports = function(app){

    const application = require('./routes/application');
    const auth-route = require('./routes/auth-route');
    const trips = require('./routes/trips');

    app.use('/', application);
    app.use('/auth-route', auth-route);
    app.use('/trips', trips);

//other routes..going to change trips to fuel or something else
}
