const connection = require("../connexion/connection");

exports.addRealisation = (req, res) => {
  connection.query("insert into realisation ");
};
