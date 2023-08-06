const mongoose = require('mongoose');

const app = require('./app');

const {
  DB_HOST = 'mongodb+srv://mongo_test:zBMynrWEGQVVu1lk@cluster0.2wvcorq.mongodb.net/db-notebook?retryWrites=true&w=majority',
  PORT = 3000,
} = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log('Database connection successful!');
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((error: any) => {
    console.log(error.message);
    process.exit(1);
  });
