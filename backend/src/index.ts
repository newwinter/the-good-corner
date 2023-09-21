import express, { request } from "express";
import { Ad } from "./types/ad";
import sqlite3 from "sqlite3";

const db = new sqlite3.Database("good_corner.sqlite");

const app = express();

const port = 3000;

const ads = [
  {
    id: 1,
    title: "Bike to sell",
    description:
      "My bike is blue, working fine. I'm selling it because I've got a new one",
    owner: "bike.seller@gmail.com",
    price: 100,
    picture:
      "https://images.lecho.be/view?iid=dc:113129565&context=ONLINE&ratio=16/9&width=640&u=1508242455000",
    location: "Paris",
    createdAt: "2023-09-05T10:13:14.755Z",
  },
  {
    id: 2,
    title: "Car to sell",
    description:
      "My car is blue, working fine. I'm selling it because I've got a new one",
    owner: "car.seller@gmail.com",
    price: 10000,
    picture:
      "https://www.automobile-magazine.fr/asset/cms/34973/config/28294/apres-plusieurs-prototypes-la-bollore-bluecar-a-fini-par-devoiler-sa-version-definitive.jpg",
    location: "Paris",
    createdAt: "2023-10-05T10:14:15.922Z",
  },
];

app.use(express.json());

// GET /ads
app.get("/ads", (req, res) => {
  db.all("SELECT * FROM ads", (err, rows) => {
    res.send(rows);
  });
});

// GET ads by id
app.get("/ads/:id", (req, res) => {
  const id: number = parseInt(req.params.id);
  db.get("SELECT * FROM ads WHERE id = ?", [id], (err, row) => {
    res.send(row);
  });
});

// GET /ads_vetements
app.get("/ads_vetements", (req, res) => {
  db.all("SELECT * from ads INNER JOIN categories AS c ON ads.category_id = c.id WHERE c.name = 'vêtements'", (err, rows) => {
    res.send(rows);
  });
});

// POST /ads
app.post("/ads", (req, res) => {
  const ids = ads.map((ad) => {
    return ad.id;
  });

  const stnt = db.prepare(
    "INSERT INTO ads (title, description, owner, price, picture, location, createdAt,category_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
  );

  stnt.run([
    req.body.title,
    req.body.description,
    req.body.owner,
    req.body.price,
    req.body.picture,
    req.body.location,
    new Date(),
    req.body.category_id
  ]);
  res.send("ok");

  // const ad = {
  //   id: Math.max(...ids) + 1,
  //   ...req.body,
  // };

  // ads.push(ad);
  // res.send(ads);
});

// PUT /ads
app.put("/ads/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const stnt = db.prepare(
    "UPDATE ads SET title = ?,description = ?,owner= ?,price= ?,picture= ?,location= ?,category_id= ? WHERE id = ?"
  );

  stnt.run([
    req.body.title,
    req.body.description,
    req.body.owner,
    req.body.price,
    req.body.picture,
    req.body.location,
    req.body.category_id, 
    id
  ]);
  res.send("ok");
  //   const newAds = ads.map((ad) => {
  //     if (ad.id === id) {
  //       return {
  //         ...ad,
  //         ...req.body,
  //       };
  //     }
  //     return ad;
  //   });
});

// DELETE /ads
app.delete("/ads/:id", (req, res) => {
  const id = parseInt(req.params.id);
  db.run("DELETE FROM ads WHERE id = ?", id);
  // ads.splice(ads.findIndex((ad) => ad.id === id))
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
