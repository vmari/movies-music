import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Film } from './Film';
import { LicensingProcess } from './LicensingProcess';

@Entity()
export class Track {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    sceneDescription: string;

    @Column('bigint', {
        nullable: true,
        select: false
    })
    sequence: number;

    @Column({type: 'float', nullable: true})
    start: number;

    @Column({type: 'float', nullable: true})
    end: number;

    /**
     * Reel number is a string on purpose. There is a special case that a producer choose to use 7/8
     */
    @Column()
    reel: string;

    @Column()
    cueNumber: string;

    @ManyToOne(type => Film, film => film.tracks, {nullable: false})
    @JoinColumn()
    film: Film;

    @ManyToOne(type => LicensingProcess, licensingProcess => licensingProcess.tracks)
    licensingProcess: LicensingProcess;

}
