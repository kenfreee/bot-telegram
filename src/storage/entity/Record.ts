import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export default class Record {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
    	type: 'varchar',
        length: 100
    })
    text: string;
}