import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export default class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 100
    })
    firstname: string;

    @Column({
        type: 'varchar',
        length: 100
    })
    lastname: string;
}