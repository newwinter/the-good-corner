import { DeleteResult, Like } from "typeorm";
import { Ads } from "../entities/ads";
import { Categories } from "../entities/categories";
import { Tags } from "../entities/tags";

export function findAdById(id: number): Promise<Ads | null> {
  return Ads.findOne({
    relations: {
      category: true,
      tags: true,
    },
    where: { id: id },
  });
}

export function search(categoryId: number, search: string): Promise<Ads[]> {
  if (categoryId) {
    return Ads.find({
      relations: {
        category: true,
      },
      where: {
        category: {
          id: categoryId,
        },
        title: Like(`%${search}%`),
      },
    });
  } else {
    return Ads.find({
      relations: {
        category: true,
      },
      where: {
        title: Like(`%${search}%`),
      },
    });
  }
}

export async function create(adsData: {
  title: string;
  description: string;
  owner: string;
  price: number;
  picture: string;
  location: string;
  categoryId: number;
  tags: string[];
}): Promise<Ads> {
  const ad = new Ads(adsData);
  const category = await Categories.findOneBy({ id: adsData.categoryId });

  if (category) {
    ad.category = category;
  }

  if (adsData.tags && adsData.tags.length > 0) {
    const tagsEntities: Tags[] = [];
    for (const tagName of adsData.tags) {
      let tag = await Tags.findOneBy({ name: tagName });
      if (!tag) {
        tag = new Tags();
        tag.name = tagName;
      }

      tagsEntities.push(tag);
    }

    console.log(tagsEntities);
    ad.tags = tagsEntities;
  }

  return ad.save();
}

export async function update(
  id: number,
  ad: Ads,
  categoryId: number
): Promise<Ads | undefined> {
  const adToupdate = await findAdById(id);

  if (!adToupdate) {
    throw new Error("Ad not found");
  }

  if (adToupdate) {
    adToupdate.title = ad.title;
    adToupdate.description = ad.description;
    adToupdate.owner = ad.owner;
    adToupdate.price = ad.price;
    adToupdate.picture = ad.picture;
    adToupdate.location = ad.location;

    const category = await Categories.findOneBy({ id: categoryId });
    if (category) {
      adToupdate.category = category;
    }
    return adToupdate.save();
  }
}

export function deleteAd(id: number): Promise<DeleteResult> {
  return Ads.delete({ id: id });
}
