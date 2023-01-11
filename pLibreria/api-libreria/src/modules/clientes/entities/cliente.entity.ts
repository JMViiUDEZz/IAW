import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Libro } from '../../libros/entities/libro.entity';

@Entity({ name: 'clientes' })
export class Cliente {
     @PrimaryGeneratedColumn('uuid')
     idC: string;

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
          // lo mas sensato sería establecer la relación con eliminación en cascada,
          // haciéndolo de esta manera: { cascade: true, eager: true }
          // en nuestro caso, no
          { cascade: false, eager: false }
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
