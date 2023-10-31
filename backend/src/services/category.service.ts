import { Like } from "typeorm";
import { Categories } from "../entities/categories";

export function getCategories(terms: string): Promise<Categories[]> {
  if (terms) {
    return Categories.find({
      where: {
        name: Like(`%${terms}%`),
      },
    });
  } else {
    return Categories.find();
  }
}
