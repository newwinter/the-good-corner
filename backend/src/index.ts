import { dataSource } from "./config/ds";
import { Ads } from "./entities/ads";
import { Categories } from "./entities/categories";
import "reflect-metadata"
import express from "express";
// import { Ad } from "./types/ad";
import cors from "cors";
import { Like } from "typeorm";
import sqlite3 from "sqlite3";

const db = new sqlite3.Database("good_corner.sqlite");

const app = express();

const port = 5001;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

// GET /ads
app.get("/ads", async (req, res) => {
  const categoryId : number = parseInt(req.query.categoryId as string);

  let ads: Ads[];
  if (categoryId) {
    ads = await Ads.find({
      relations: {
        category: true,
      },
      where: {
        category: {
          id: categoryId,
        },
      },
    });
  } else {
    ads = await Ads.find({
      relations: {
        category: true,
      },
    });
  }

  res.send(ads);
});

// GET ads by id
app.get("/ads/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    res.sendStatus(400);
    return;
  }

  const ad = await Ads.findOne({
    relations: {
      category: true,
    },
    where: { id: id },
  });

  res.send(ad);
});

// GET catégories
app.get("/categories", async (req, res) => {
  const terms = req.query.terms;

  let categories: Categories[] = [];
  if (terms) {
    categories = await Categories.find({
      where: {
        name: Like(`%${terms}%`),
      },
    });
  } else {
    categories = await Categories.find();
  }

  res.send(categories);
});

// // GET /ads_vetements
// app.get("/ads_vetements", (req, res) => {
//   db.all("SELECT * from ads INNER JOIN categories AS c ON ads.category_id = c.id WHERE c.name = 'vêtements'", (err, rows) => {
//     res.send(rows);
//   });
// });

// POST /ads
app.post("/ads", async (req, res) => {
  const ad = new Ads()
  ad.title = req.body.title;
  ad.description = req.body.description;
  ad.owner = req.body.owner;
  ad.price = req.body.price;
  ad.picture = req.body.picture;
  ad.location = req.body.location;
  ad.createdAt = new Date();

  const category = await Categories.findOneBy({ id: req.body.categoryId });
  if (category) {
    ad.category = category;
  }
  ad.save();
  res.send(ad);
});

// PUT /ads
app.put("/ads/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const ad = await Ads.findOneBy({ id: id });
  if (ad) {
    ad.title = req.body.title;
    ad.description = req.body.description;
    ad.owner = req.body.owner;
    ad.price = req.body.price;
    ad.picture = req.body.picture;
    ad.location = req.body.location;


    const category = await Categories.findOneBy({ id: req.body.categoryId });
    if (category) {
      ad.category = category;
    }

    ad.save();
    res.send(ad);
    return;
};
res.sendStatus(404);
});

// DELETE /ads
app.delete("/ads/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  await Ads.delete({ id: id });
  res.sendStatus(204);
});

app.listen(port, async () => {
  await dataSource.initialize();
  console.log(`Example app listening on port ${port}`);
});
