import {Entity, Column, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class MYFile{

    @PrimaryGeneratedColumn('uuid')
    id: number 

    @Column()
    name: string

    @Column({
        type: "bytea"
    })
    data: Buffer

    @Column()
    mimeType:string
}