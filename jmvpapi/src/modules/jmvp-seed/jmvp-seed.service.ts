import { Injectable } from '@nestjs/common';
import { JmvpAuthService } from '../jmvp-auth/jmvp-auth.service';
import { JmvpAparatosService } from '../jmvp-aparatos/jmvp-aparatos.service';
import  dataUsuarios  from '../jmvp-seed/data/usuarios.json'; 
import  dataAparatos  from '../jmvp-seed/data/aparatos.json';

  
  @Injectable()
export class JmvpSeedService {
 
  constructor (
    private readonly jmvpAuthService: JmvpAuthService,
    private readonly jmvpAparatosService: JmvpAparatosService,
 ){}
 
 runData(){
   this.jmvpAparatosService.jmvpdeleteAllAparatos()
   this.insertNewAparatos()
   this.jmvpAuthService.jmvpdeleteAllUsers();
   this.insertNewUsers();
   return dataAparatos;
 }
  
    private async insertNewAparatos(){
      const insertPromises = [];
      dataAparatos.forEach( aparato => {
        insertPromises.push(this.jmvpAparatosService.jmvpcreate(aparato))
      })
      await Promise.all(insertPromises);
    }

    private async insertNewUsers(){
      const insertPromises = [];
      dataUsuarios.forEach( user => {
        insertPromises.push(this.jmvpAuthService.jmvpregister(user))
      })
      await Promise.all(insertPromises);
    }
}