import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import Record from "./Record";

@Entity()
export default class User {
    constructor(user_telegram_id: number, firstname: string, lastname: string) {
        this.user_telegram_id = user_telegram_id;
        this.firstname = firstname;
        this.lastname = lastname;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'int',
        unique: true,
        nullable: false
    })
    user_telegram_id: number;

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

    @OneToMany(type => Record, record => record.user, {
        eager: true,
        cascadeInsert: true, 
        cascadeUpdate: true    
    })
    records: Record[];
}