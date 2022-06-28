import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';

import User from './User';
import Tag from './Tag';

@Entity('donates')
class Donate {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  user_id: string;

  @Column()
  tag_id: string;

  @Column()
  status_donate: string;

  @Column()
  image: string;

  @JoinColumn({ name: 'user_id' })
  @OneToOne(() => User, user => user.id)
  user: User;

  @JoinColumn({ name: 'tag_id' })
  @OneToOne(() => Tag, tag => tag.id)
  tag: Tag;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Donate;
