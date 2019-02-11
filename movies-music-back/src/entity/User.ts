import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Length, IsEmail } from 'class-validator';
import { UserFilmRoles } from './UserFilmRoles';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        length: 80
    })
    @Length(10, 80)
    name: string;

    @Column({
        length: 100
    })
    @Length(10, 100)
    @IsEmail()
    email: string;

    @Column({
        length: 100
    })
    @Length(10, 100)
    @IsEmail()
    password: string;

    @OneToMany(type => UserFilmRoles, userFilmRoles => userFilmRoles.user)
    userFilmRoles: UserFilmRoles[];
}
