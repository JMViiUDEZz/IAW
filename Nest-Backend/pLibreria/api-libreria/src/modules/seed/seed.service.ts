import { Injectable } from '@nestjs/common';
// import { AuthService } from '../auth/auth.service';
import { ClientesService } from '../clientes/clientes.service';
// import  dataUsers  from '../seed/data/users.json'; 
import  dataClientes  from '../seed/data/mis-clientes.json';

  
  @Injectable()
export class SeedService {
 
  constructor (
  //  private readonly userService: AuthService,
   private readonly clientesService: ClientesService 
 ){}
 
 runData(){
   this.clientesService.deleteAllClientes()
   this.insertNewClientes()
  //  this.userService.deleteAllUsers();
  //  this.insertNewUsers();
   return dataClientes;
 }
  

    private async insertNewClientes(){
      const insertPromises = [];
      dataClientes.forEach( cliente => {
        insertPromises.push(this.clientesService.create(cliente))
      })
      await Promise.all(insertPromises);
    }
   


}
