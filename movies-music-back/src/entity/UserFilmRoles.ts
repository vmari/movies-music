import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { Film } from './Film';
import { User } from './User';

export enum UserRole {
    ADMIN = "admin",
    EDITOR = "editor",
    READER = "reader"
}

@Entity()
export class UserFilmRoles {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "enum",
        enum: UserRole
    })
    role: string;

    @CreateDateColumn()
    dateCreated: Date;

    @ManyToOne(type => User, user => user.userFilmRoles, {primary: true})
    user: User;

    @ManyToOne(type => Film, film => film.userFilmRoles, {primary: true})
    group: Film;
}
