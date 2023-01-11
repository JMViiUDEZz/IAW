import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JmvpIncidenciasService } from './jmvp-incidencias.service';
import { CreateJmvpIncidenciaDto } from './dto/create-jmvp-incidencia.dto';
import { UpdateJmvpIncidenciaDto } from './dto/update-jmvp-incidencia.dto';

@Controller('jmvp-incidencias')
export class JmvpIncidenciasController {
  constructor(private readonly jmvpIncidenciasService: JmvpIncidenciasService) {}

  @Post()
  create(@Body() createJmvpIncidenciaDto: CreateJmvpIncidenciaDto) {
    return this.jmvpIncidenciasService.jmvpcreate(createJmvpIncidenciaDto);
  }

  // @Get()
  // findAll() {
  //   return this.jmvpIncidenciasService.findAll();
  // }

  @Get(':jmvpcodigo')
  findOne(@Param('jmvpcodigo') jmvpcodigo: string) {
    return this.jmvpIncidenciasService.jmvpgetId(jmvpcodigo);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateJmvpIncidenciaDto: UpdateJmvpIncidenciaDto) {
  //   return this.jmvpIncidenciasService.update(+id, updateJmvpIncidenciaDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.jmvpIncidenciasService.remove(+id);
  // }
}
