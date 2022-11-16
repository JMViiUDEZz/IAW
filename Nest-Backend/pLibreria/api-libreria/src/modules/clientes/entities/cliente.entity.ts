import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Libro } from '../../libros/entities/libro.entity';

@Entity({ name: 'clientes' })
export class Cliente {
     @PrimaryGeneratedColumn('increment')
     id: number;

     @Column('text', {
          unique: true,
     })
     name: string;
 
     @Column('text', {
          unique: true,
     })
     email: string;

     @Column('text', {
          unique:true,
     })
     website?: string;   
 
     @Column('text', {
          unique: true,
     })
     github?: string;
 
     @Column('text', {
          unique:true,
     })
     twitter?: string;

    // books
     @OneToMany(
          () => Libro,
          (libro) => libro.cliente,
          { cascade: false }
          // { cascade: true, eager: true }
     )
     libros?: Libro[];

     @BeforeInsert()
     checkUrlInsert() {
          if ( !this.website.includes('https://' )) {
               this.website = `https://${this.website}`;
          }

          if ( !this.github.includes('https://github.com/' )) {
               this.github = `https://github.com/${this.github}`;
          }

          if ( !this.twitter.includes('https://twitter.com/' )) {
               this.twitter = `https://twitter.com/${this.twitter}`;
          }
     }
}
