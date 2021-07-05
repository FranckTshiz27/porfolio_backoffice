const connection = require("../connexion/connection");

exports.addProjet = (req, res) => {
  const { title, description, lien_hebergement, lien_github } = req.body;

  connection.query(
    "insert into projet(title,description,lien_hebergement,lien_github) values(?,?,?,?)",
    [title, description, lien_hebergement, lien_github],
    (error) => {
      if (error) {
        return res.status(404).send("Le projet n'a pas été inséré");
      }

      res.status(200).send({ message: "insertion éffectuée avec succès" });
    }
  );
};

exports.getProjects = (req, res) => {
  connection.query("select * from projet", (error, results) => {
    if (error)
      return res
        .status(404)
        .send("Erreur lors de la requete getProjets " + error);

    res.status(200).send(results);
  });
};

exports.updateProjet = (req, res) => {
  const { title, description, lien_hebergement, lien_github } = req.body;
  const projet_id = req.id;
  connection.query(
    "update projet set title = ? , description =? , lien_hebergement = ? ,lien_github= ? where projet_id = ?",
    [title, description, lien_hebergement, lien_github, projet_id],
    (error) => {
      if (error)
        return res
          .status(404)
          .send({ message: "erreur de modification du projet" });
      res.status(200).send({ message: "projet modifié avec succès" });
    }
  );
};

exports.deleteProject = (req, res) => {
  const projet_id = req.params.id;
  connection.query(
    "delete from projet where projet_id = ?",
    projet_id,
    (error) => {
      if (error)
        return res
          .status(404)
          .json({ message: "Le projet n'a pas pu etre supprimé" + error });

      res.status(200).send({ message: "projet supprimé avec succès!" });
    }
  );
};
