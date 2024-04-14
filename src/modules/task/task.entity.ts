import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export default class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ type: "varchar", length: 20,})
  name: string;

  @Column({ type: "boolean", default: false })
  state: boolean;

  @CreateDateColumn({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
  createAt: Date;

  @UpdateDateColumn({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
  updateAt: Date;
}
