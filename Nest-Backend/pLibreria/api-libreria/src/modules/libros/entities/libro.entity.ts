import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'libros' })
export class Libro {
     @PrimaryGeneratedColumn('increment')
     id: number;
 
     @Column('text', {
          unique: true,
     })
     title: string;

     @Column('text', {
          unique: true,
     })
     isbn: string;

     @Column('integer', {
          unique:true,
     })
     pageCount: number;

     @Column('text', {
          unique:true,
     })
     publishedDate: string;

     @Column('text', {
          unique:true,
     })
     thumbnailUrl: string;

     @Column('text', {
          unique:true,
     })
     shortDescription: string;

     @Column('text', {
          unique:true,
     })
     longDescription: string;

     @Column('text', {
          unique:true,
     })
     status: string;

     // authors: string;

}
