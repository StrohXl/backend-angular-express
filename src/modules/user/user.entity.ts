import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 10 })
  firstName!: string;

  @Column({ type: "varchar", length: 10 })
  lastName!: string;

  @Column({ type: "varchar", length: 50 })
  email!: string;

  @Column({ type: "varchar", length: 50 })
  password!: string;
}
