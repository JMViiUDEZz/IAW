import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
          default: 0,
     })
     pageCount: number;

     @Column({
          type:'text',
     })
     publishedDate: string;

     @Column('text', {
          unique: true,
     })
     thumbnailUrl: string;

     @Column('text', {
          nullable: true,
     })
     shortDescription: string;

     @Column('text', {
          nullable: true,
     })
     longDescription: string;

     @Column('text', {
          // unique: true,
     })
     status: string;

     // authors: string;

     @BeforeInsert()
     checkTitleInsert() {
         this.title = this.title
             .toUpperCase()
     }
}
