const connection = require("../connexion/connection");

exports.getTechnologies = (req, res, next) => {
  connection.query("select * from technologie", (error, results) => {
    if (error) {
      return res.status(401).json("Erreur");
    }
    res.status(200).send(results);
  });
};

exports.addTechnologie = (req, res, next) => {
  const libelle = req.body.libelle;
  connection.query(
    "insert into technologie(libelle) values (?)",
    libelle,
    (error) => {
      if (error) {
        res.status(201).send("echec d'insertion " + error);
      }
      return res
        .status(200)
        .send({ message: "Insertion effectuée avec succès" });
    }
  );
};

exports.updateTechnologie = (req, res, next) => {
  const libelle = req.body.libelle;
  const technologie_id = req.params.id;
  connection.query(
    "update technologie set libelle = ? where technologie_id = ?",
    [libelle, technologie_id],
    (error) => {
      if (error) {
        return res.status(404).send({ message: "erreur de modification" });
      }

      res.status(200).send({ message: "Technologie modifiée avec succès" });
    }
  );
};

exports.deleteTechnologie = (req, res, next) => {
  const id = req.params.id;
  const technologie_id = parseInt(id);
  connection.query(
    "delete from technologie where technologie_id = ?",
    technologie_id,
    (error) => {
      if (error) {
        return res.status(404).send({
          message: "La technologie n'a pas pu etre supprimée" + error,
        });
      }
      res.status(200).json({ message: "Technologie supprimée avec succès" });
    }
  );
};
