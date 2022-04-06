mongose = require('mongoose');
// connection base de donnees
mongose.connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex:true,
    // useFindAndModify:true
}).then(() => {
    console.log(`Connected to the database ! ${process.env.MONGO_DB_URI}`)
}).catch(err => {
    console.log("Cannot connect to the database!", err)
});