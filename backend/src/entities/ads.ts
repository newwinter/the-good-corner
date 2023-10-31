import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { Categories } from "./categories";
import { Tags } from "./tags";

@Entity()
export class Ads extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  title: string;

  @Column()
  description: string;

  @Column({ length: 100 })
  owner: string;

  @Column()
  price: number;

  @Column({ length: 255 })
  picture: string;

  @Column()
  location: string;

  @Column()
  createdAt: Date;

  @ManyToOne(() => Categories)
  category: Categories;

  @ManyToMany(() => Tags, {
    cascade: ["insert"],
  })
  @JoinTable()
  tags: Tags[];

  constructor(
    datas: {
      title: string;
      description: string;
      owner: string;
      price: number;
      picture: string;
      location: string;
    } | null = null
  ) {
    super();
    if (datas) {
      this.title = datas.title;
      this.description = datas.description;
      this.owner = datas.owner;
      this.price = datas.price;
      this.picture = datas.picture;
      this.location = datas.location;
      this.createdAt = new Date();
    }
  }
}

