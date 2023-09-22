import { dataSource } from "./config/ds";
import { Ads } from "./entities/ads";
import "reflect-metadata"
import express from "express";
// import { Ad } from "./types/ad";
import sqlite3 from "sqlite3";

const db = new sqlite3.Database("good_corner.sqlite");

const app = express();

const port = 3000;

app.use(express.json());

// GET /ads
app.get("/ads",  async (req, res) => {
  const ads = await Ads.find();
    res.send(ads);
  });

// GET ads by id
app.get("/ads/:id", async (req, res) => {
  const id: number = parseInt(req.params.id);
  const ad = await Ads.findOneBy({ id });
    res.send(ad);
  });

// GET /ads_vetements
app.get("/ads_vetements", (req, res) => {
  db.all("SELECT * from ads INNER JOIN categories AS c ON ads.category_id = c.id WHERE c.name = 'vêtements'", (err, rows) => {
    res.send(rows);
  });
});

// POST /ads
app.post("/ads", (req, res) => {
  const ad = new Ads()
  ad.title = req.body.title;
  ad.description = req.body.description;
  ad.owner = req.body.owner;
  ad.price = req.body.price;
  ad.location = req.body.location;
  ad.createdAt = new Date();
  ad.save();
  // const stnt = db.prepare(
  //   "INSERT INTO ads (title, description, owner, price, picture, location, createdAt,category_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
  // );

  // stnt.run([
  //   req.body.title,
  //   req.body.description,
  //   req.body.owner,
  //   req.body.price,
  //   req.body.picture,
  //   req.body.location,
  //   new Date(),
  //   req.body.category_id
  // ]);
  res.send(ad);
});

// PUT /ads
app.put("/ads/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  // const stnt = db.prepare(
  //   "UPDATE ads SET title = ?,description = ?,owner= ?,price= ?,picture= ?,location= ?,category_id= ? WHERE id = ?"
  // );
  const ad = await Ads.findOneBy({ id: id });
  if (ad) {
    ad.title = req.body.title;
    ad.description = req.body.description;
    ad.owner = req.body.owner;
    ad.price = req.body.price;
    ad.picture = req.body.picture;
    ad.location = req.body.location;
    ad.save();
    res.send(ad);
    return;
  // stnt.run([
  //   req.body.title,
  //   req.body.description,
  //   req.body.owner,
  //   req.body.price,
  //   req.body.picture,
  //   req.body.location,
  //   req.body.category_id, 
  //   id
  // ]);
};
res.sendStatus(404);
});

// DELETE /ads
app.delete("/ads/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  //   db.run("DELETE FROM ads WHERE id = ?", id);
  //   res.sendStatus(204);
  // });
  await Ads.delete({ id: id });
  res.sendStatus(204);
});

app.listen(port, async () => {
  await dataSource.initialize();
  console.log(`Example app listening on port ${port}`);
});
