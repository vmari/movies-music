import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LicensingProcessStatus {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;
}
