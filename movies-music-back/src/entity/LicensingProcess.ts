import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { Film } from './Film';
import { Song } from './Song';
import { LicensingProcessStatus } from './LicensingProcessStatus';
import { Track } from './Track';

@Entity()
export class LicensingProcess {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column("int")
    flags: number;

    @ManyToOne(type => Song, {nullable: false})
    song: Song;

    @ManyToOne(type => Film, film => film.licensingProcesses)
    film: Film;

    @OneToMany(type => Track, tracks => tracks.licensingProcess)
    tracks: Track[];

    @ManyToOne(type => LicensingProcessStatus)
    status: LicensingProcessStatus;
}
