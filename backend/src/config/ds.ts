import { DataSource } from "typeorm";
import { Ads } from "../entities/ads";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./good_corner.sqlite",
  entities: [Ads],
  synchronize: true,
});
