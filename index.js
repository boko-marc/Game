require('dotenv').config()
// application
const app = require('./app')
// databases
const db = require('./database')

// listening port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port url http://localhost:${PORT}.`);
});