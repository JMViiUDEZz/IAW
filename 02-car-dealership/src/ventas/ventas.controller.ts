/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

@Controller('ventas')
export class VentasController {  
    
    @Get('list')
    getAllVentas() {
      return ['Listado de Ventas'];
    }
  
    @Get('new')
    newVentas() {
      return ['Creado de Ventas'];
    }
  
    @Get('update')
    updateVentas() {
      return ['Actualizado de Ventas'];
    }
  
    @Get('delete')
    deleteVentas() 
    {
      return ['Borrado de Ventas'];
    }
  }
