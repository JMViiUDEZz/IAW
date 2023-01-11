import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { JmvpIncidencia } from '../../jmvp-incidencias/entities/jmvp-incidencia.entity';

@Entity({ name: 'jmvpAparatos' })
export class JmvpAparato {
    // @PrimaryGeneratedColumn('uuid')
    @PrimaryColumn('text')
    jmvpcod: string;

    @Column('text')
    jmvpnombre: string;

    @Column('text')
    jmvptipo: string;

    @Column('text')
    jmvpaula: string;

    @Column('integer')
    jmvpaño: number;

    @OneToMany(
        () => JmvpIncidencia,
        (JmvpIncidencia) => JmvpIncidencia.jmvpcodAp,
        { cascade: true, eager: true  }
    )
    jmvpcodigoIn?: JmvpIncidencia[];

}