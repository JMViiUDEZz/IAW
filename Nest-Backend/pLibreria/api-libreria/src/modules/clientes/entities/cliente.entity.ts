import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

  @Column('text', {
    unique:true,
  })
  editorial?: string;
}
