import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Link {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  shortId: string;

  @Column()
  url: string;
}
