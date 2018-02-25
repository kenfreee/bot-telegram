import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export default class User {
    constructor(user_id, firstname, lastname) {
        this.user_id = user_id;
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
    user_id: number;

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