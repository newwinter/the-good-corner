import { DataSource } from "typeorm";
import { Ads } from "../entities/ads";
import { Categories } from "../entities/categories";
import { Tags } from "../entities/tags";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./good_corner.sqlite",
  entities: [Ads, Categories, Tags],
  synchronize: true,
});
