const app = require('./app');

const port = process.env.PORT || 7713;

app.listen(port, () => console.log(`
CatBook backend server started: 
http://localhost:${port}/ - main
http://localhost:${port}/cats
`));
