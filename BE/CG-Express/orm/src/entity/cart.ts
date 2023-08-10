import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Car{
    @PrimaryGeneratedColumn()
    id:number;
    @Column({type:'varchar',length:255})
    carName:string
    @Column({type:'int'})
    carCode:number
    @Column({type:'int'})
    carPrice:number
    @Column({type:'varchar',length:255})
    category:string
    @Column({type:'varchar',length:255})
    des:string
}