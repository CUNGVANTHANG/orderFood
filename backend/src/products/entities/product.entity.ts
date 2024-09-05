import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'products' })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  thumbnail: string;

  @Column('double')
  rating: number;

  @Column('double')
  price: number;

  @Column('double')
  discount: number;

  @Column()
  textBadge: string;

  @Column()
  frameBadge: string;

  @Column()
  origin: string;

  @Column()
  deliveryInfo: string;

  @Column()
  sold: number;

  @Column()
  provider: string;

  @Column()
  carrier: string;

  @Column()
  type: string;

  @Column()
  quantity: number;

  @Column('boolean')
  ads: boolean;
}
