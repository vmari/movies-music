import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { IsNumber, IsPositive, IsString, Length, MaxLength } from 'class-validator';

@Entity()
export class Song {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    @IsString()
    @MaxLength(20, {
        message: "Artist is too long"
    })
    artist: string;

    @Column()
    @IsString()
    @Length(1, 255)
    title: string;

    @Column()
    duration: number;

    @Column()
    @IsString()
    genre: string;
}
