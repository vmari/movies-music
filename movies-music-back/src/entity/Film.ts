import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { LicensingProcess } from './LicensingProcess';
import { UserFilmRoles } from './UserFilmRoles';
import { Track } from './Track';

@Entity()
export class Film {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    title: string;

    @Column()
    cover: string;

    @Column()
    description: string;

    @Column()
    dateCreated: string;

    @OneToMany(type => LicensingProcess, licensingProcesses => licensingProcesses.film)
    licensingProcesses: LicensingProcess[];

    @OneToMany(type => Track, tracks => tracks.film)
    tracks: Track[];

    @OneToMany(type => UserFilmRoles, userFilmRoles => userFilmRoles.group)
    userFilmRoles: UserFilmRoles[];

    constructor(title: string) {
        this.title = title;
    }

    workflow: object;
}
