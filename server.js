const app = require('./app');
const port = process.env.PORT || 3000;
// const port = process.env.PORT || 80;


app.listen(port, () => {
    console.log(`started on port: ${port}`);
});