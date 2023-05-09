import { Column, Entity, Index } from 'typeorm';

@Entity()
export class User {
  @Column({
    primary: true,
    generated: false,
  })
  id: string;

  @Column()
  @Index({unique: true})
  username: string;

  @Column()
  @Index({unique: true})
  email: string;

  @Column()
  password: string;

  static create(id: string, username: string, email: string, password: string): User {
    const user = new User();
    user.id = id;
    user.username = username;
    user.email = email;
    user.password = password;

    return user;
  }
}
