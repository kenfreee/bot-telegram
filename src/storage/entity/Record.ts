import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";
import User from "./User";

@Entity()
export default class Record {
    constructor(text: string) {
        this.text = text;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
    	type: 'varchar',
        length: 100
    })
    text: string;

    @ManyToOne(type => User, user => user.records/*, {
    	cascadeAll: true,
    	onDelete: "CASCADE"
    }*/)
    @JoinColumn({ 
        name: "user_id",
        referencedColumnName: "user_telegram_id"
    })
    user: User;
}