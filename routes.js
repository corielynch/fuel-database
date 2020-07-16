module.exports = (app) => {
    const application = require('./routes/application');
    const user = require('./routes/user');
    const submit = require('./routes/submit-data');
    const view = require('./routes/view-data')

    app.use('/', user);
    // app.use('/user', user);
    app.use('/submit', submit);
    app.use('/view', view);

}