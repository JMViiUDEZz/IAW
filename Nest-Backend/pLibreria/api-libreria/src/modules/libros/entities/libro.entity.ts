import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'libros' })
export class Libro {
   @PrimaryGeneratedColumn('increment')
   id: number;
 
   @Column('text', {
        unique: true,
   })
   name: string;
 
   @Column('text', {
        unique: true,
   })
   titulo: string;

   @Column('text', {
        unique:true,
    })
    editorial: string;

}
