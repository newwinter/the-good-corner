import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Categories } from "./categories";

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
  location: number;

  @Column()
  createdAt: Date;

  @ManyToOne(() => Categories) 
  category: Categories;
}

