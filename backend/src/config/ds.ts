import { DataSource } from "typeorm";
import { Ads } from "../entities/ads";
import { Categories } from "../entities/categories";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./good_corner.sqlite",
  entities: [Ads, Categories],
  synchronize: true,
});
