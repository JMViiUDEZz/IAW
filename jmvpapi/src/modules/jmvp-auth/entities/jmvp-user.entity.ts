import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { JmvpIncidencia } from '../../jmvp-incidencias/entities/jmvp-incidencia.entity';

@Entity({ name: 'jmvpUsuarios' })
export class JmvpUser {
    @PrimaryColumn('text')
    jmvpidea: string;
  
    @Column('text')
    jmvppassword: string;

    @Column('bool', { default: true })
    jmvpisActive: boolean;
  
    @Column('text', { default: "profesor" })
    jmvprol: string;

    @Column('text')
    jmvpnombre: string;

    @OneToMany(
        () => JmvpIncidencia,
        (JmvpIncidencia) => JmvpIncidencia.jmvpideaUs,
        { cascade: true, eager: true  }
    )
    jmvpcodigoIn?: JmvpIncidencia[];
}