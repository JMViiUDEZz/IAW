import { BeforeInsert, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from '../../clientes/entities/cliente.entity';

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

     // authors
     
     // clients (sin definir en la data)
     @ManyToOne(
          () => Cliente,
          ( cliente ) => cliente.libros,
          // { onDelete: 'CASCADE' }
          { cascade: false }
     )
     cliente: Cliente;

     @BeforeInsert()
     checkTitleInsert() {
         this.title = this.title
             .toUpperCase()
     }
}
