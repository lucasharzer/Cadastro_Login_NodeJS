const mongoose = require('mongoose');

mongoose.connect(process.env.URL_BANCO);
mongoose.Promise = global.Promise;

mongoose.connection.on("error", (error) => console.error(error));
mongoose.connection.once("open", () => console.log("-> Conectado com o banco de dados!"));

module.exports = mongoose;