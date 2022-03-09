const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query("SELECT * FROM libros", (err, rows) => {
      if (err) return res.send(err);
      res.json(rows);
    });
  });
});

routes.post("/", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query("INSERT INTO libros set ?", [req.body], (err, rows) => {
      if (err) return res.send(err);
      res.send("registrado correctamente");
    });
  });
});

routes.delete("/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "DELETE FROM libros WHERE id_libro=?",
      [req.params.id],
      (err, rows) => {
        if (err) return res.send(err);
        res.send("eliminado correctamente");
      }
    );
  });
});


routes.put("/:id", (req, res) => {
    req.getConnection((err, conn) => {
      if (err) return res.send(err);
      conn.query(
        "UPDATE libros set ? WHERE id_libro=?",
        [req.body,req.params.id],
        (err, rows) => {
          if (err) return res.send(err);
          res.send("actualizado correctamente");
        }
      );
    });
  });

module.exports = routes;
