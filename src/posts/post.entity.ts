import { PrimaryGeneratedColumn, Entity, Column, ManyToMany } from 'typeorm';
import { User } from 'src/users/user.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  authorId: number;

  @ManyToMany(() => User, (user) => user.posts)
  author: User;
}
